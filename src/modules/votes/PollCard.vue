<template>
  <li class="poll-card">
    <h3>{{ poll.topic }}</h3>

    <ul class="poll-card__options">
      <poll-option
        v-for="option in sortedOptions"
        :key="option.id"
        :option="option"
        :total-votes="totalVotes"
        @vote="addVote"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { IPoll } from "@/modules/votes/poll.types";
import { usePollsStore } from "@/modules/votes/polls.store";
import PollOption from "@/modules/votes/PollOption.vue";

interface Props {
  poll: IPoll;
}

const props = defineProps<Props>();

const store = usePollsStore();

const sortedOptions = ref(props.poll.options);

const addVote = (optionId: string) => {
  store.vote(props.poll.id, optionId);
};

watch(props.poll.options, (value) => {
  setTimeout(() => {
    sortedOptions.value = value.sort((a, b) =>
      a.votes.length < b.votes.length ? 1 : -1
    );
  }, 700);
});

const totalVotes = computed(() => {
  return props.poll.options.reduce(
    (acc, item) => (acc += item.votes.length),
    0
  );
});
</script>

<style scoped lang="scss">
.poll-card {
  background-color: #222222;
  border: 1px solid #313131;
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  min-height: 200px;
  padding: 20px;
  width: 100%;

  &__options {
    margin-top: 24px;
    display: flex;
    flex-flow: column;
    row-gap: 16px;
  }
}
</style>

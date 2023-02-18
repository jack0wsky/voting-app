<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { IOption } from "@/types/poll";
import BaseButton from "@/components/base/BaseButton.vue";
import { USERS } from "@/constants/polls";

const props = defineProps<{ option: IOption; totalVotes: number }>();
defineEmits(["vote"]);

const hasAlreadyVoted = ref(false);
const votes = ref(props.option.votes.map((vote) => vote.user.slice(0, 1)));

const progressWidth = computed(() => {
  return `${(props.option.votes.length / USERS.length) * 100}%`;
});

watch(props.option.votes, (value) => {
  const users = value.map((vote) => vote.user);
  hasAlreadyVoted.value = users.includes("Francesco");

  votes.value = users.map((user) => user.slice(0, 1));
});
</script>

<template>
  <li class="option">
    <div class="option__metadata">
      <p>{{ option.name }}</p>

      <div class="option__progress-bar">
        <div class="option__progress" :style="{ width: progressWidth }" />
      </div>

      <div class="option__voters">
        <div class="option__voter" v-for="voter in votes" :key="voter">
          {{ voter }}
        </div>
      </div>
    </div>

    <base-button
      v-if="!hasAlreadyVoted"
      variant="secondary"
      @click="$emit('vote', option.id)"
      >Vote</base-button
    >
    <p v-else>Voted 🎉</p>
  </li>
</template>

<style scoped lang="scss">
.option {
  display: flex;
  justify-content: space-between;
  width: 100%;

  &__metadata {
    display: flex;
    flex-flow: column;
    width: 75%;
  }

  &__progress-bar {
    background-color: #282828;
    border-radius: 10px;
    height: 4px;
    margin-top: 8px;
    width: 100%;
  }

  &__progress {
    background: linear-gradient(90deg, #ecbb20, #ec9420);
    border-radius: 10px;
    height: 100%;
    transition: width 0.3s ease-in-out;
  }

  &__voters {
    display: flex;
    margin-top: 8px;
  }

  &__voter {
    align-items: center;
    background-color: #565656;
    outline: 3px solid #222222;
    border-radius: 50%;
    display: flex;
    height: 32px;
    justify-content: center;
    margin-left: -6px;
    width: 32px;

    &:first-child {
      margin-left: 0 !important;
    }
  }
}
</style>

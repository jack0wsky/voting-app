<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useUserStore } from "@/modules/user/user.store";
import type { IOption } from "@/modules/votes/poll.types";
import BaseButton from "@/modules/shared/BaseButton.vue";
import { USERS } from "@/constants/polls";

const props = defineProps<{ option: IOption; totalVotes: number }>();
defineEmits(["vote"]);

const currentUser = useUserStore();

const hasAlreadyVoted = ref(false);

const progressWidth = computed(() => {
  return `${(props.option.votes.length / USERS.length) * 100}%`;
});

watch(props.option.votes, (value) => {
  const users = value.map((vote) => vote.user);
  if (!currentUser.user) return (hasAlreadyVoted.value = false);

  hasAlreadyVoted.value = users
    .map((user) => user.displayName)
    .includes(currentUser.user.displayName || "");
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
        <div
          class="option__voter"
          v-for="voter in props.option.votes"
          :key="voter.id"
        >
          <div v-if="!!voter.user">
            <img
              class="option__voter-avatar"
              v-if="!!voter.user.photoURL"
              :src="voter.user.photoURL || ''"
              :alt="voter.user.displayName || ''"
            />
            <p v-else>{{ (voter.user.displayName || "").slice(0, 1) }}</p>
          </div>
        </div>
      </div>
    </div>

    <base-button
      v-if="!hasAlreadyVoted && !!currentUser.user"
      variant="secondary"
      @click="$emit('vote', option.id)"
      >Vote</base-button
    >
    <p v-if="hasAlreadyVoted && !currentUser.user">Voted 🎉</p>
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
    overflow: hidden;
    width: 32px;

    &:first-child {
      margin-left: 0 !important;
    }
  }

  &__voter-avatar {
    height: 100%;
    width: 100%;
  }
}
</style>

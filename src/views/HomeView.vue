<script setup lang="ts">
import { usePollsStore } from "@/modules/votes/polls.store";
import PollCard from "@/modules/votes/PollCard.vue";

const store = usePollsStore();
</script>

<template>
  <main class="voting page-layout">
    <h1>Polls</h1>

    <div v-if="!store.polls.length" class="voting__empty-state">
      <p>There are no polls</p>
    </div>

    <ul class="voting__polls" v-else>
      <poll-card v-for="poll in store.polls" :key="poll.id" :poll="poll" />
    </ul>
  </main>
</template>

<style scoped lang="scss">
.voting {
  &__empty-state {
    align-items: center;
    display: flex;
    height: 400px;
    justify-content: center;
    width: 100%;
  }

  &__polls {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 32px;

    @media screen and (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>

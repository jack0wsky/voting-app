<script setup lang="ts">
import NewPollForm from "@/modules/votes/create-poll-form/NewPollForm.vue";
</script>

<template>
  <main class="page-layout">
    <h1>Create a poll</h1>

    <NewPollForm />
  </main>
</template>

<style scoped lang="scss">
.page-layout {
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 40px;
  width: 100%;
}
</style>

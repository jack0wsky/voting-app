<script setup lang="ts">
import { RouterLink } from "vue-router";
import BaseButton from "@/components/base/BaseButton.vue";
</script>

<template>
  <header class="header">
    <nav class="header__navigation">
      <RouterLink class="header__link" to="/">Polls</RouterLink>
      <base-button variant="primary" href="/create-poll"
        >Create poll</base-button
      >
    </nav>
  </header>
</template>

<style scoped lang="scss">
.router-link-active {
  background: #2a2a2a;
  border-radius: 40px;
}

.header {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80px;
  width: 100%;

  &__navigation {
    align-items: center;
    background-color: #222222;
    border-radius: 40px;
    padding: 8px;
    display: flex;
    column-gap: 10px;
  }

  &__link {
    padding: 10px 20px;
  }
}
</style>

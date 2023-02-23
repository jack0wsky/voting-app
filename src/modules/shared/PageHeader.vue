<script setup lang="ts">
import { RouterLink } from "vue-router";
import BaseButton from "@/modules/shared/BaseButton.vue";
import { useUserStore } from "@/modules/user/user.store";
import { onMounted } from "vue";

const userStore = useUserStore();

onMounted(() => {
  userStore.getUserData();
});
</script>

<template>
  <header class="header">
    <nav class="header__navigation">
      <RouterLink class="header__link" to="/">Polls</RouterLink>
      <base-button variant="primary" href="/create-poll"
        >Create poll</base-button
      >
      <div v-if="!!userStore.user" class="header__user">
        <div class="header__user-avatar">
          <img
            :src="userStore.user.photoURL || ''"
            :alt="userStore.user.displayName || ''"
          />
        </div>
        <button @click="userStore.logout()">Logout</button>
      </div>
      <button class="header__link" v-else @click="userStore.login()">
        Login
      </button>
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

  &__user {
    display: flex;
  }

  &__user-avatar {
    border-radius: 50%;
    height: 42px;
    overflow: hidden;
    width: 42px;

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>

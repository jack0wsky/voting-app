<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./modules/shared/PageHeader.vue";
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #f1f1f1;
  font-family: "Satoshi", sans-serif;
}

body {
  background-color: #181818;
}

button,
a {
  all: unset;
  cursor: pointer;
}

li {
  list-style-type: none;
}

.page-layout {
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 20px;
  width: 100%;
}
</style>

<template>
  <li class="new-option">
    <p>{{ props.name }}</p>

    <button @click="$emit('onDeleteClick', props.id)">Delete</button>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string; id: string }>();
</script>

<style scoped lang="scss">
.new-option {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
}
</style>

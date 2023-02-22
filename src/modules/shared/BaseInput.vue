<template>
  <label class="input-wrapper">
    <span>{{ label }}</span>
    <input
      class="input-wrapper__input"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:modelValue', value)"
    />
  </label>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["modelValue", "placeholder", "label"]);
defineEmits(["update:modelValue"]);

const value = ref(props.modelValue);
</script>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  flex-flow: column;

  &__input {
    background-color: #2c3e50;
    border: none;
    max-width: 200px;
    padding: 5px 10px;
    width: 100%;
  }
}
</style>

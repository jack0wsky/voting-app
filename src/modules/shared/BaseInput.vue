<template>
  <label class="input-wrapper">
    <span class="input-wrapper__label">{{ label }}</span>
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

  &__label {
    margin-bottom: 4px;
  }

  &__input {
    background-color: transparent;
    border: none;
    outline: 1px solid #876d00;
    font-size: 1em;
    max-width: 200px;
    padding: 10px 20px;
    width: 100%;

    &:active,
    &:focus {
      outline: 1px solid #ecbb20;
    }
  }
}
</style>

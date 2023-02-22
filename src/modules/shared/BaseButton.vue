<script setup lang="ts">
interface IButtonProps {
  href?: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
}

defineProps<IButtonProps>();
</script>

<template>
  <RouterLink
    :to="href"
    v-if="href"
    class="button"
    :class="{
      'button--primary': variant === 'primary',
      'button--secondary': variant === 'secondary',
    }"
  >
    <slot />
  </RouterLink>
  <button
    v-else
    class="button"
    :class="{
      'button--primary': variant === 'primary',
      'button--secondary': variant === 'secondary',
    }"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  border-radius: 40px;
  padding: 10px 20px;
  height: max-content;
  width: max-content;

  &--primary {
    background: linear-gradient(90deg, #d8a914, #ec9420);
    color: #fff;
    font-weight: 500;

    &:hover {
      background: linear-gradient(90deg, #be9514, #d07c0d);
    }
  }

  &--secondary {
    background: transparent;
    border: 1px solid #d8a914;
    color: #fff;
  }
}
</style>

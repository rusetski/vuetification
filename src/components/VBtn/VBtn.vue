<template>
  <button
    class="v-btn"
    :class="{ disabled, rounded }"
  >
    <div class="v-btn__content">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  disabled?: boolean;
  rounded?: boolean;
}>();
</script>

<style lang="scss" scoped>
.v-btn {
  position: relative;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  color: #1e1e1e;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;

  &__content {
    position: relative;
    z-index: 3;
  }

  &.disabled {
    background-color: lightgray;
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
  }

  &.rounded {
    border-radius: 5px;
  }

  &:active {
    transform: translate(1px, 1px);
  }
}
</style>

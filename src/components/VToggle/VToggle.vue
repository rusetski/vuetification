<template>
  <label
    class="v-toggle"
    :class="[{ checked: model, disabled }, `label-${labelPosition}`]"
  >
    <div class="v-toggle__track">
      <div class="v-toggle__dot">
        <input
          class="v-toggle__input"
          type="checkbox"
          v-model="model"
        />

        <div class="v-toggle__thumb"></div>
      </div>
    </div>

    <span
      v-if="label"
      class="v-toggle__label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  labelPosition: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#d32f2f'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const model = defineModel();
</script>

<style lang="scss" scoped>
.v-toggle {
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;
  cursor: pointer;

  &.label-top,
  &.label-bottom {
    align-items: start;
  }

  &.label-top {
    flex-direction: column-reverse;
  }

  &.label-bottom {
    flex-direction: column;
  }

  &.label-left {
    flex-direction: row-reverse;
  }

  &.checked {
    .v-toggle__track {
      background-color: v-bind(color);
    }

    .v-toggle__dot {
      left: 24px;
    }
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &__track {
    position: relative;
    width: 46px;
    height: 24px;
    border-radius: 15px;
    background-color: rgba(66, 66, 66, 0.5);
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s;
  }

  &__dot {
    position: absolute;
    top: 2px;
    left: 2px;
    transition: left 0.3s;
  }

  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:focus + .v-toggle__thumb {
      outline: 5px solid rgba(0, 0, 0, 0.15);
    }
  }

  &__thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }

  &__label {
    padding: 8px;
  }
}
</style>

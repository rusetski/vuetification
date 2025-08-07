<template>
  <Teleport to="body">
    <div
      class="v-notify"
      :class="position"
    >
      <TransitionGroup name="notify">
        <div
          v-for="notification of notifications"
          :key="notification.key"
          class="v-notify__point"
        >
          <span
            v-if="html"
            v-html="notification.message"
          />

          <template v-else>
            {{ notification.message }}
          </template>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  position?: string;
  timeout?: number;
  html?: boolean;
}

const { position = 'bottom left', timeout = 3000, html = true } = defineProps<Props>();

const model = defineModel<string[]>({ default: () => [] });

let timer: ReturnType<typeof setTimeout> | undefined;
const notifications = ref<{ message: string; key: string }[]>([]);

const removeLast = () => {
  if (notifications.value.length && !timer) {
    timer = setTimeout(() => {
      notifications.value.splice(0, 1);
      timer = undefined;
      removeLast();
    }, timeout);
  }
};

watch(model.value, () => {
  if (model.value.length) {
    notifications.value.push({
      message: model.value[0],
      key: `${Date.now()}${notifications.value.length}`
    });

    model.value.splice(0, 1);
    removeLast();
  }
});
</script>

<style lang="scss" scoped>
.v-notify {
  z-index: 99999;
  position: fixed;
  padding: 15px;
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 0;
  pointer-events: none;

  &.top {
    top: 0;
    bottom: auto;
    flex-direction: column-reverse;
  }

  &.right {
    right: 0;
    left: auto;

    .notify-enter-from {
      transform: translateX(calc(100% + 15px));
    }
  }

  &.bottom {
    bottom: 0;
  }

  &.left {
    left: 0;
  }

  &__point {
    margin-top: 10px;
    padding: 15px;
    width: 330px;
    color: #fff;
    font-size: 14px;
    line-height: 1;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    user-select: none;
    pointer-events: all;
    overflow: hidden;
    word-break: break-all;
  }
}

.notify-enter-active {
  transition: 0.2s;
}

.notify-leave-active {
  transition: 0.5s;
}

.notify-enter-from {
  opacity: 0;
  transform: translateX(calc(-100% + 15px));
}

.notify-leave-to {
  opacity: 0;
}
</style>

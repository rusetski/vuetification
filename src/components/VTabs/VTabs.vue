<template>
  <div
    ref="element"
    class="v-tabs"
  >
    <div class="v-tabs__buttons">
      <div
        class="v-tabs__button"
        v-for="(button, index) of buttons"
        :key="button.title + index"
        :class="{ active: activeTab === index }"
        @click="setActive(index)"
      >
        {{ button.title }}
      </div>
    </div>

    <TransitionGroup name="tab">
      <slot />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

interface Tab {
  props: {
    title?: string;
    value: string;
  };
}

const slots = defineSlots();
const model = defineModel<number>();
const element = ref<HTMLDivElement>();

const tabs = slots
  .default()
  .filter((item: { type: { __name?: string } }) => item.type.__name === 'VTab');

const activeTab = ref(typeof model.value === 'number' ? model.value : 0);

const buttons = tabs.map((tab: Tab) => ({
  title: tab.props.title
}));

watch(model, (value) => {
  activeTab.value = value || 0;
});

const setActiveClass = () => {
  const active = element.value?.querySelector('.v-tab.active');
  active?.classList.remove('active');
  const elements = element.value?.querySelectorAll('.v-tab');
  elements?.[activeTab.value].classList.add('active');
};

const setActive = (index: number) => {
  activeTab.value = index;
  model.value = index;
  setActiveClass();
};

onMounted(() => {
  setActiveClass();
});
</script>

<style lang="scss" scoped>
.v-tabs {
  &__buttons {
    display: flex;
  }

  &__button {
    padding: 15px 30px;
    flex-grow: 1;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
    user-select: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.07);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &.active {
      border-bottom: 2px solid var(--theme-color-primary);
    }
  }

  :deep(.v-tab) {
    display: none;
  }

  :deep(.v-tab.active) {
    display: block;
    animation: fade 0.3s linear;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
}
</style>

<template>
  <div class="title">VToggle</div>
  <div class="row">
    <VToggle
      label="Component label"
      v-model="checked"
    />
  </div>

  <div class="title">VBtn</div>
  <div class="row">
    <VBtn>Button</VBtn>
  </div>

  <div class="title">VNotify</div>
  <div class="row">
    <div>
      <VBtn @click="notifications.push('New notification')"> Add notification </VBtn>

      <VNotify v-model="notifications" />
    </div>
  </div>

  <div class="title">ClickOutside</div>
  <div class="row">
    <div
      class="square"
      :class="{ active }"
      @click="active = true"
      v-click-outside="{
        handler: () => (active = false),
        closeConditional: () => !checked,
        include: '#rectangle'
      }"
    >
      {{ active ? 'Click outside' : 'Click' }}
    </div>
  </div>
  <div class="row">
    <div
      class="rectangle"
      id="rectangle"
    >
      This is included
    </div>
    <div class="rectangle">This is not included</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
const notifications = ref<string[]>([]);
const active = ref<boolean>(false);
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #eef3f7;
  font-family: Roboto;
}

.title {
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}

.row {
  padding: 10px 30px;
  display: flex;
  justify-content: center;
}

.square {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  background-color: #fff;
  transition: 0.1s;

  &.active {
    background-color: var(--theme-color-primary);
  }
}

.rectangle {
  margin: 0 10px;
  padding: 10px;
  width: 100px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  background-color: #fff;
}
</style>

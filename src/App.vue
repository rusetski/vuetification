<template>
  <div class="title">VToggle</div>
  <div class="row">
    <VToggle
      label="Component label"
      v-model="checked"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
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
</style>

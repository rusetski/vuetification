<template>
  <div class="v-tab">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    requred: true
  }
});
</script>

<style lang="scss" scoped>
.v-tab {
  padding: 15px;
}
</style>

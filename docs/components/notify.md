# Notify

## Usage

<script setup>
import { ref } from 'vue';
import VBtn from '../../src/components/VBtn/VBtn.vue';
import VNotify from '../../src/components/VNotify/VNotify.vue';
const notifications = ref([]);
</script>

<VBtn @click="notifications.push('New notification')">Add notification</VBtn>

<VNotify v-model="notifications" />

```vue
<VNotify v-model="notifications" />
```

## Props

| Prop         | Type                  | Default     | Description                                     |
| ------------ | --------------------- | ----------- | ----------------------------------------------- |
| **position** | top/right/bottom/left | bottom/left | Notifications position relative to the viewport |
| **timeout**  | number                | 3000        | Notification display time                       |
| **html**     | boolean               | true        | Support html inside notifications               |

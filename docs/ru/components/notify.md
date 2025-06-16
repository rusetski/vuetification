# Notify

## Использование

<script setup>
import { ref } from 'vue';
import VBtn from '../../../src/components/VBtn/VBtn.vue';
import VNotify from '../../../src/components/VNotify/VNotify.vue';
const notifications = ref([]);
</script>

<VBtn @click="notifications.push('Новое уведомление')">Добавить уведомление</VBtn>

<VNotify v-model="notifications" />

```vue
<VNotify v-model="notifications" />
```

## Props

| Prop         | Тип                   | По умолчанию | Описание                                   |
| ------------ | --------------------- | ------------ | ------------------------------------------ |
| **position** | top/right/bottom/left | bottom/left  | Расположение уведомлений относительно окна |
| **timeout**  | number                | 3000         | Время отображения уведомления              |
| **html**     | boolean               | true         | Поддерживать html внутри уведомлений       |

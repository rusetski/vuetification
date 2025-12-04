# useKeyboard

Помогает отслеживать текущие нажатые клавиши, а так же добавлять сочетания клавиш

## Использование

```js
// Импортируйте из библиотеки
import { useKeyboard } from 'vuetification';

// Создайте новый экземпляр
const keyboard = useKeyboard(options);
```

Теперь из него можно получить переменную pressed содержашую все нажатые в данный момент клавиши,
а так же метод isPressed который возвращает true если клавиша нажата и false если нет.

Регистр клавиш не учитывается

```js
const { pressed, isPressed } = useKeyboard();
```

**pressed**: {{ pressed }}

**isPressed('a')**: {{ isPressed('a') }}

Чтобы добавить сочетание клавиш используйте функцию shortcut, передав в нее сочетание клавиш через **+** первым аргументом и функцию которую нужно выполнить вторым.
Вы также можете добавить одну клавишу в качестве первого аргумента, чтобы назначить на нее обработчик.

```js
const { shortcut } = useKeyboard();

shortcut('ctrl+shift+q', showNotitication('Вы использовали сочетание клавиш'));
```

<script setup>
import { ref } from 'vue';
import { useKeyboard } from '../../../src/composables/useKeyboard';
import VNotify from '../../../src/components/VNotify/VNotify.vue';

const { pressed, isPressed, shortcut } = useKeyboard();
const notifications = ref([]);

shortcut('ctrl+shift+q', () => notifications.value.push('Вы использовали сочетание клавиш'))
</script>

<VNotify v-model="notifications" />

## Опции

| Опция            | Default | Description                       |
| ---------------- | ------- | --------------------------------- |
| **ignoreLayout** | true    | Игнорировать раскладку клавиатуры |

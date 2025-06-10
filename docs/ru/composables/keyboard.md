# useKeyboard

Помогает отслеживать текущие нажатые клавиши, а так же добавлять сочетания клавиш

## Использование

```js
// Импортируйте из библиотеки
import { useKeyboard } from 'vuetification';

// Создайте новый экземпляр
const keyboard = useKeyboard();
```

Теперь из него можно получить переменную pressed содержашую все нажатые в данный момент клавиши,
а так же метод isPressed который возвращает true если клавиша нажата и false если нет.

Регистр клавиш не учитывается

```js
const { pressed, isPressed } = useKeyboard();
```

**pressed**: {{ pressed }}

**isPressed('a')**: {{ isPressed('a') }}

Чтобы добавить сочетание клавиш используйте функцию shortcut, передав в нее сочетание клавиш через **+** первым аргументом и функцию которую нужно выполнить вторым

```js
const { shortcut } = useKeyboard();

shortcut('control+shift+q', () => alert('Вы использовали сочетание клавиш'));
```

<script setup>
import { useKeyboard } from '../../../src/composables/useKeyboard';

const { pressed, isPressed, shortcut } = useKeyboard();

shortcut('control+shift+q', () => alert('Вы использовали сочетание клавиш'))
</script>

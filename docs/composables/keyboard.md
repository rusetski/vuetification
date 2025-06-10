# useKeyboard

Helps get currently pressed keys and add keyboard shortcuts

## Usage

```js
// Импортируйте из библиотеки
import { useKeyboard } from 'vuetification';

// Создайте новый экземпляр
const keyboard = useKeyboard();
```

Now you can get the variable pressed from it, which contains all the keys that are currently pressed and the method isPressed, which returns true if the key is pressed and false if not.

The case of the keys is ignored

```js
const { pressed, isPressed } = useKeyboard();
```

**pressed**: {{ pressed }}

**isPressed('a')**: {{ isPressed('a') }}

To add a keyboard shortcut, use the shortcut function, passing the keyboard shortcut via **+** as the first argument and the function to be executed as the second.

```js
const { shortcut } = useKeyboard();

shortcut('control+shift+q', () => alert('Вы использовали сочетание клавиш'));
```

<script setup>
import { useKeyboard } from '../../src/composables/useKeyboard';

const { pressed, isPressed, shortcut } = useKeyboard();

shortcut('control+shift+q', () => alert('Вы использовали сочетание клавиш'))
</script>

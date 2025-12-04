# useKeyboard

Helps get currently pressed keys and add keyboard shortcuts

## Usage

```js
// Import from the library
import { useKeyboard } from 'vuetification';

// Create a new interval instance
const keyboard = useKeyboard(options);
```

Now you can get the variable pressed from it, which contains all the keys that are currently pressed and the method isPressed, which returns true if the key is pressed and false if not.

The case of the keys is ignored

```js
const { pressed, isPressed } = useKeyboard();
```

**pressed**: {{ pressed }}

**isPressed('a')**: {{ isPressed('a') }}

To add a keyboard shortcut, use the shortcut function, passing the keyboard shortcut via **+** as the first argument and the function to be executed as the second.
You can also add a single key as the first argument to assign a handler to it.

```js
const { shortcut } = useKeyboard();

shortcut('ctrl+shift+q', showNotitication('You used a keyboard shortcut'));
```

<script setup>
import { ref } from 'vue';
import { useKeyboard } from '../../src/composables/useKeyboard';
import VNotify from '../../src/components/VNotify/VNotify.vue';

const { pressed, isPressed, shortcut } = useKeyboard();
const notifications = ref([]);

shortcut('ctrl+shift+q', () => notifications.value.push('You used a keyboard shortcut'))
</script>

<VNotify v-model="notifications" />

## Options

| Option           | Default | Description            |
| ---------------- | ------- | ---------------------- |
| **ignoreLayout** | true    | Ignore keyboard layout |

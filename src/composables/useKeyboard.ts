import { reactive, onMounted, onBeforeUnmount } from 'vue';

interface Shortcut {
  keys: string[];
  callback: () => void;
}

export function useKeyboard() {
  const pressed = reactive<string[]>([]);
  const isPressed = (key: string) => pressed.includes(key.toLowerCase());
  const shortcuts: Shortcut[] = [];

  const onKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    if (!pressed.includes(key)) {
      pressed.push(key);
    }

    if (shortcuts.length) {
      shortcuts.forEach((shortcut) => shortcut.keys.every(isPressed) && shortcut.callback());
    }
  };

  const onKeyUp = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    if (pressed.includes(key)) {
      pressed.splice(pressed.indexOf(key), 1);
    }
  };

  const shortcut = (shortcut: string, callback: () => void) => {
    if (typeof callback !== 'function') return;
    const keys = shortcut.split('+').map((key) => key.toLowerCase());

    shortcuts.push({
      keys,
      callback
    });
  };

  onMounted(() => {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
  });

  return {
    pressed,
    isPressed,
    shortcut
  };
}

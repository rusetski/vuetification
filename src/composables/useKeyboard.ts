import { reactive, onMounted, onBeforeUnmount } from 'vue';

interface Shortcut {
  keys: string[];
  callback: () => void;
}

interface Options {
  ignoreLayout?: boolean;
}

const defaultOptions = {
  ignoreLayout: true
};

export function useKeyboard({ ignoreLayout }: Options = defaultOptions) {
  const pressed = reactive<string[]>([]);
  const shortcuts: Shortcut[] = [];

  const transformKey = (key: string) => (key === 'ctrl' ? 'control' : key).toLowerCase();

  const isPressed = (key: string) => pressed.includes(transformKey(key));

  const getKey = ({ code, key }: KeyboardEvent) => {
    return (
      ignoreLayout && (code.includes('Key') || code.includes('Digit'))
        ? code.replace(/Key|Digit/g, '')
        : key
    ).toLowerCase();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const key = getKey(event);
    if (!pressed.includes(key)) {
      pressed.push(key);
    }

    if (shortcuts.length) {
      shortcuts.forEach((shortcut) => shortcut.keys.every(isPressed) && shortcut.callback());
    }
  };

  const onKeyUp = (event: KeyboardEvent) => {
    const key = getKey(event);
    if (pressed.includes(key)) {
      pressed.splice(pressed.indexOf(key), 1);
    }
  };

  const shortcut = (shortcut: string, callback: () => void) => {
    if (typeof callback !== 'function') return;
    const keys = shortcut.split('+').map(transformKey);

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

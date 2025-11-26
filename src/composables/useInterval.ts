import { ref, onBeforeUnmount } from 'vue';

type Callback = (iteration: number) => void;

type OptionsOrCallback = Callback | Options;

interface Options {
  callback: Callback;
  delay: number;
  stopOnUnmount?: boolean;
  repeat?: number | undefined;
  immediately?: boolean;
}

const defaultOptions: Partial<Options> = {
  delay: 1000,
  stopOnUnmount: true,
  repeat: undefined,
  immediately: false
};

export const useInterval = (optionsOrCallback: OptionsOrCallback, intervalDelay?: number) => {
  const isFirstArgFunction = typeof optionsOrCallback === 'function';
  const callback = isFirstArgFunction ? optionsOrCallback : optionsOrCallback?.callback;
  const delay = isFirstArgFunction ? intervalDelay : optionsOrCallback?.delay;
  const {
    stopOnUnmount = defaultOptions.stopOnUnmount,
    repeat = defaultOptions.repeat,
    immediately = defaultOptions.immediately
  } = isFirstArgFunction ? defaultOptions : optionsOrCallback || defaultOptions;
  let interval: ReturnType<typeof setInterval>;
  const iteration = ref(0);

  const stop = () => {
    clearInterval(interval);
  };

  const hundler = () => {
    if (callback) callback(iteration.value);

    iteration.value++;

    if (typeof repeat === 'number' && repeat <= iteration.value) stop();
  };

  onBeforeUnmount(() => {
    if (stopOnUnmount) {
      stop();
    }
  });

  return {
    iteration,
    start() {
      if (interval) stop();

      iteration.value = 0;

      if (immediately) hundler();
      interval = setInterval(hundler, delay || defaultOptions.delay);
    },
    stop
  };
};

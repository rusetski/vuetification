import { onBeforeUnmount } from 'vue';

interface Options {
  stopOnUnmount?: boolean;
}

const defaultOptions = {
  stopOnUnmount: true
};

export const useInterval = ({ stopOnUnmount }: Options = defaultOptions) => {
  let interval: ReturnType<typeof setInterval>;

  const stop = () => {
    clearInterval(interval);
  };

  onBeforeUnmount(() => {
    if (stopOnUnmount) {
      stop();
    }
  });

  return {
    start(callback: () => void, time: number) {
      if (interval) stop();
      interval = setInterval(callback, time);
    },
    stop
  };
};

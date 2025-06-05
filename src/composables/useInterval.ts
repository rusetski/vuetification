import { onBeforeUnmount } from 'vue';

export const useInterval = () => {
    let interval: ReturnType<typeof setInterval>;

    const stop = () => {
        clearInterval(interval);
    };

    onBeforeUnmount(() => {
        stop();
    });

    return {
        start(callback: () => void, time: number) {
            if (interval) stop();
            interval = setInterval(callback, time);
        },
        stop
    };
};

# useInterval

## Usage

```js
// Import from the library
import { useInterval } from 'vuetification';

// Create a new interval instance and pass callback and delay as arguments
const interval = useInterval(callback, delay);

// Now you can start an interval by calling start method
interval.start();

// And stop it by using stop method
interval.stop();
```

The interval is automatically stopped when the component's onBeforeUnmount hook is triggered and when a new interval is started from the same instance.

## Options

You can also pass object with some options as the first argument of the useInterval function instead of callback function

```js
const interval = useInterval({
  callback,
  delay: 3000,
  repeat: 5
});
```

| Option            | Type     | Default   | Description                                                          |
| ----------------- | -------- | --------- | -------------------------------------------------------------------- |
| **callback**      | Function |           | Callback function (receives current iteration as the first argument) |
| **delay**         | Number   | 1000      | Interval diration                                                    |
| **stopOnUnmount** | Boolean  | true      | Stop the interval in the onBeforeUnmount hook                        |
| **repeat**        | Number   | undefined | Stop interval after specified number of calls                        |
| **immediately**   | Boolean  | true      | Start the callback immediately without waiting for a delay           |

## Current iteration

If you need the current iteration number you can get it as ref from the current instance or as the first argument of callback function

```js
const callback = (iteration) => {
  console.log(iteration);
};

const { iteration } = useInterval(callback);
```

<script setup>
import { useInterval } from '../../src/composables/useInterval';

const { start, iteration } = useInterval();
start();
</script>

Iteration counter: {{ iteration }} times.

## Change delay

If you need to change delay you can pass new delay as argument to start function.

```js
interval.start(100);
```

::: warning
Since you are starting a new interval, this will start it without waiting for the previous interval to end, and will also reset the iteration counter.
:::

To start the interval with a new delay each time delay changes, you can do something like this:

```js
watch(delay, interval.start);
```

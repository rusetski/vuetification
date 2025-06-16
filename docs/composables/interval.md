# useInterval

## Usage

```js
// Import from the library
import { useInterval } from 'vuetification';

// Create a new interval instance
const interval = useInterval();

// Now you can start an interval by calling start
// and passing it a callback and an interval in milliseconds.
interval.start(callback, diration);

// And stop it by using stop
interval.stop();
```

The interval is automatically stopped when the component's onBeforeUnmount hook is triggered and when a new timer is started from the same instance.

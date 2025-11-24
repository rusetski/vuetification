# useInterval

## Использование

```js
// Импортируйте из библиотеки
import { useInterval } from 'vuetification';

// Создайте новый экземпляр интервала
const interval = useInterval(options);

// Теперь вы можете запустить интервал вызвав start
// и передав в него callback и интервал в милисекундах
interval.start(callback, diration);

// И остановить его вызвав stop
interval.stop();
```

Интервал автоматически останавливается при срабатывании хука onBeforeUnmount компонента и при запуске нового таймера из того же экземпляра.

## Options

| Option            | Default | Description                                |
| ----------------- | ------- | ------------------------------------------ |
| **stopOnUnmount** | true    | Остановите интервал в хуке onBeforeUnmount |

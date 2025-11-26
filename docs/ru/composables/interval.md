# useInterval

## Использование

```js
// Импортируйте из библиотеки
import { useInterval } from 'vuetification';

// Создайте новый интервал и передайте функцию первым аргументом и задержку вторым
const interval = useInterval(callback, delay);

// Теперь вы можете запустить интервал вызвав start
interval.start();

// И остановить его вызвав stop
interval.stop();
```

Интервал автоматически останавливается при срабатывании хука onBeforeUnmount компонента и при запуске нового таймера из того же экземпляра.

## Опции

Вы также можете передать объект опций в качестве первого аргумента функции useInterval вместо функции обратного вызова.

```js
const interval = useInterval({
  callback,
  delay: 3000,
  repeat: 5
});
```

| Название          | Тип      | По умолчинию | Описание                                                                  |
| ----------------- | -------- | ------------ | ------------------------------------------------------------------------- |
| **callback**      | Function |              | Функция обратного вызова (получает текущую итерацию в качестве аргумента) |
| **delay**         | Number   | 1000         | Длительность интервала                                                    |
| **stopOnUnmount** | Boolean  | true         | Останавливать интервал в хуке onBeforeUnmount                             |
| **repeat**        | Number   | undefined    | Остановить интервал после указанного количества вызовов                   |
| **immediately**   | Boolean  | true         | Запустить функцию обратного вызова немедленно, не дожидаясь задержки      |

## Номер текущей итерации

Если вам нужен номер текущей итерации, вы можете получить его как ref из текущего экземпляра или как первый аргумент функции обратного вызова.

```js
const callback = (iteration) => {
  console.log(iteration);
};

const { iteration } = useInterval(callback);
```

<script setup>
import { useInterval } from '../../../src/composables/useInterval';

const { start, iteration } = useInterval();
start();
</script>

Счетчик итераций: {{ iteration }} раз

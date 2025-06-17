# Click Outside

## Использование

<script setup>
import { ref } from 'vue'; 
const checked = ref(false);
const active = ref(false);
</script>

<style>
.square {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150px;
  height: 150px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  background-color: #fff;
  transition: 0.1s;
}

.square.active {
	color: #fff;
	background-color: #d32f2f;
}

.rectangle {
  margin: 20px;
  padding: 10px;
  width: 120px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  background-color: #fff;
}
</style>

<VToggle label="Отключить директиву" color="#d32f2f" v-model="checked" />

<div style="display: flex; flex-direction: column; align-items: center;">
<div
	class="square"
	:class="{ active }"
	@click="active = true"
	v-click-outside="{
		handler: () => (active = false),
		closeConditional: () => !checked,
		include: '.include'
	}"
>
	{{ active ? 'Нажмите снаружи' : 'Нажмите' }}
</div>

<div style="display: flex;">
	<div class="rectangle include">
		Элемент включен
	</div>
	<div class="rectangle">Элемент не включен</div>
</div>

</div>

```vue
<VToggle label="Отключить" v-model="checked" />

<div
  class="square"
  :class="{ active }"
  @click="active = true"
  v-click-outside="{
    handler: () => (active = false),
    closeConditional: () => !checked,
    include: '.include'
  }"
>
    {{ active ? 'Нажмите снаружи' : 'Нажмите' }}
</div>

<div class="rectangle include">Элемент включен</div>
<div class="rectangle">Элемент не включен</div>
```

В директиву можно передать функцию обработчик или объект состоящий из:

```js
handler: () => void
closeConditional: () => boolean
include: string | string[]
```

include может быть любым валидным css селектором или массивом селекторов

## Модификаторы

| Модификатор   | Описание                                    |
| ------------- | ------------------------------------------- |
| **mousedown** | Использовать событие mousedown вместо click |

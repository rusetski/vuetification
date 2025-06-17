# Click Outside

## Usage

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
  width: 100px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  background-color: #fff;
}
</style>

<VToggle label="Disable click outside" color="#d32f2f" v-model="checked" />

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
	{{ active ? 'Click outside' : 'Click' }}
</div>

<div style="display: flex;">
	<div class="rectangle include">
		This is included
	</div>
	<div class="rectangle">This is not included</div>
</div>

</div>

```vue
<VToggle label="Disable click outside" v-model="checked" />

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
    {{ active ? 'Click outside' : 'Click' }}
</div>

<div class="rectangle include">This is included</div>
<div class="rectangle">This is not included</div>
```

You can pass a handler function or an object consisting of to the directive:

```js
handler: () => void
closeConditional: () => boolean
include: string | string[]
```

include can be any valid css selector or array of selectors

## Modifiers

| Modifier      | Description                          |
| ------------- | ------------------------------------ |
| **mousedown** | Use mousedown event instead of click |

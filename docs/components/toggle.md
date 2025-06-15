# Toggle

## Usage

<script setup>
import VToggle from '../../src/components/VToggle/VToggle.vue';
</script>

<VToggle label="Toggle" />

```vue
<v-toggle label="Toggle" />
```

## Props

| Prop              | Type                  | Default     | Description                              |
| ----------------- | --------------------- | ----------- | ---------------------------------------- |
| **label**         | string                | undefined   | Component label                          |
| **labelPosition** | top/right/bottom/left | bottom left | Label position relative to the component |
| **color**         | string                |             | Color of the active component            |
| **disabled**      | boolean               | false       | Disable the ability to use component     |

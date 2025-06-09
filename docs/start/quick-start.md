# Installation

```js
npm install vuetification
```

Add this code to main file of your project

```js
import { createApp } from 'vue';
import App from './App.vue';
// vuetification
import vuetification from 'vuetification';
import 'vuetification/style.css';

const app = createApp(App);
app.use(vuetification);
app.mount('#app');
```

import type { App, Component } from 'vue';
// Components
export * as components from './components';

// Composables
export { useInterval } from './composables/useInterval';
export { useKeyboard } from './composables/useKeyboard';

interface Options {
  componentsPrefix?: string;
  components: {
    [componentName: string]: {
      default: Component;
    };
  };
}

export default {
  install(app: App, options?: Options) {
    const defaultOptions = {
      componentsPrefix: 'v',
      components
    };

    const mergedOptions = Object.assign({}, defaultOptions, options);

    Object.keys(mergedOptions.components).forEach((key) => {
      const prefix = mergedOptions.componentsPrefix || '';
      const capitalizedPrefix =
        prefix && prefix.length > 1
          ? prefix.charAt(0).toUpperCase() + prefix.slice(1)
          : prefix.toUpperCase();
      const componentName = `${capitalizedPrefix}${key.slice(1)}`;

      app.component(
        componentName,
        mergedOptions.components[key as keyof typeof mergedOptions.components].default
      );
    });
  }
};

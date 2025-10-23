import type { App, Component, Directive } from 'vue';

// Components
import * as components from './components';
export * from './components';

// Directives
import * as directives from './directives';
export * from './directives';

// Composables
export { useInterval } from './composables/useInterval';
export { useKeyboard } from './composables/useKeyboard';
export { chunk } from './utilites/chunk';
import { installTheme, type ThemeOptions } from './composables/useTheme';

interface Options {
  componentsPrefix?: string;
  components?: {
    [componentName: string]: Component;
  };
  directives?: {
    [directiveName: string]: Directive;
  };
  theme?: ThemeOptions;
}

export default {
  install(app: App, options?: Options) {
    const defaultOptions = {
      componentsPrefix: 'v',
      components,
      directives
    };

    installTheme(options?.theme);

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
        mergedOptions.components[key as keyof typeof mergedOptions.components]
      );
    });

    Object.keys(mergedOptions.directives).forEach((key) => {
      app.directive(key, mergedOptions.directives[key as keyof typeof mergedOptions.directives]);
    });
  }
};

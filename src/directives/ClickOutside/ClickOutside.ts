interface Args {
  handler: () => void;
  closeConditional?: () => boolean;
  include?: string | string[];
}

interface Binding {
  value: (() => void) | Args;
  modifiers: {
    mousedown: boolean;
  };
}

let onMouseEvent: (event: MouseEvent) => void;
let mouseEvent: 'click' | 'mousedown' = 'click';

export const ClickOutside = {
  mounted(el: HTMLElement, binding: Binding) {
    const wrap = (value: string | string[]) => (Array.isArray(value) ? value : [value]);

    const getElements = () => {
      const include = typeof binding.value === 'object' ? wrap(binding.value.include || []) : [];
      return include.reduce(
        (acc, selector) => {
          const htmlElement: HTMLElement | null = document.querySelector(selector);
          htmlElement && acc.push(htmlElement);
          return acc;
        },
        [el]
      );
    };

    onMouseEvent = (event) => {
      const elements = getElements();
      const handler = typeof binding.value === 'function' ? binding.value : binding.value.handler;
      const closeConditional =
        typeof binding.value === 'object' && binding.value.closeConditional
          ? binding.value.closeConditional()
          : true;
      const isActionOutside = elements.every(
        (el: HTMLElement) => el !== event.target && !el.contains(event.target as Node)
      );

      isActionOutside && closeConditional && handler && handler();
    };

    if (binding.modifiers.mousedown) {
      mouseEvent = 'mousedown';
    }

    document.addEventListener(mouseEvent, onMouseEvent);
  },
  beforeUnmount() {
    document.removeEventListener(mouseEvent, onMouseEvent);
  }
};

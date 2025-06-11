export interface ThemeOptions {
  colors?: {
    primary?: string;
  };
}

const defaultTheme: ThemeOptions = {
  colors: {
    primary: '#d32f2f'
  }
};

export const installTheme = (options?: ThemeOptions) => {
  const colors = Object.assign({}, defaultTheme.colors, options?.colors);

  Object.entries(colors).forEach(([key, value]) => {
    const root = document.querySelector(':root') as HTMLElement;
    root.style.setProperty(`--theme-color-${key}`, value);
  });
};

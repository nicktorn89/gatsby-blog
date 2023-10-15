export const getColorMode = () => {
  const savedColorMode = window.localStorage.getItem('colorMode');
  const isColorModeSaved = typeof savedColorMode === 'string';

  if (isColorModeSaved) {
    return savedColorMode;
  }

  const prefersColorsScheme = window.matchMedia('(prefers-color-scheme: dark)');

  const isPreferenceDefined = typeof prefersColorsScheme?.matches === 'boolean';

  if (isPreferenceDefined) {
    return prefersColorsScheme.matches ? 'dark' : 'light';
  }

  return 'light';
};

export const changeCssVariablesByTheme = (theme) => {
  const cssPropertiesByTheme = {
    dark: {
      '--background-color': '#1c1c1c',
      '--color-primary': '#eeeeee',
      '--color-text': 'white',
      '--color-text-light': 'white',
      '--color-heading': '#eeeeee',
      '--color-heading-black': 'white',
    },
    light: {
      '--background-color': 'white',
      '--color-primary': '#005b99',
      '--color-text': '#2e353f',
      '--color-text-light': '#4f5969',
      '--color-heading': '#1a202c',
      '--color-heading-black': 'black',
    },
  };

  const currentProperties = cssPropertiesByTheme[theme];

  Object.entries(currentProperties).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

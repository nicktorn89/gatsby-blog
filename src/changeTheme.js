export const changeTheme = (theme) => {
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

import React from 'react';

import { getColorMode, changeCssVariablesByTheme } from '../changeTheme';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(getColorMode);

  const changeTheme = (value) => {
    setTheme(value);

    changeCssVariablesByTheme(value);

    window.localStorage.setItem('colorMode', value);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
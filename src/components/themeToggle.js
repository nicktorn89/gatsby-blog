import React from 'react';
import { useState } from 'react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const handleChangeTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='theme-toggle-container' onClick={handleChangeTheme}>{theme}</div>
  );
};

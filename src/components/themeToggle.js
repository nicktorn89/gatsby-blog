import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { HiOutlineMoon, HiOutlineLightBulb } from 'react-icons/hi';
import { changeTheme } from '../changeTheme';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const handleChangeTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(
    () => {
      changeTheme(theme);
    },
    [theme],
  );

  const CurrentIcon = theme === 'dark' ? HiOutlineMoon : HiOutlineLightBulb;

  return (
    <div className='theme-toggle-container' onClick={handleChangeTheme}>
      <CurrentIcon size='2em' />
    </div>
  );
};

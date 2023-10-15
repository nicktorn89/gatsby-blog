import React from 'react';

import { HiOutlineMoon, HiOutlineLightBulb } from 'react-icons/hi';

import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export const ThemeToggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    changeTheme(theme === 'light' ? 'dark' : 'light');
  };

  const CurrentIcon = theme === 'dark' ? HiOutlineMoon : HiOutlineLightBulb;

  return (
    <div className='theme-toggle-container' onClick={handleChangeTheme}>
      <CurrentIcon size='2em' />
    </div>
  );
};

import React from 'react';

import { HiOutlineMoon, HiOutlineLightBulb } from 'react-icons/hi';

import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

export const ThemeToggle = () => {
  const handleChangeTheme = () => {
    changeTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const themeData = useContext(ThemeContext);
  
  if (!themeData) return null;

  const { theme, changeTheme } = themeData;

  const CurrentIcon = theme === 'dark' ? HiOutlineMoon : HiOutlineLightBulb;

  return (
    <div className='theme-toggle-container' onClick={handleChangeTheme}>
      <CurrentIcon size='2em' />
    </div>
  );
};

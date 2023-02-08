import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
// Importing components
import Dark from './Buttons/Dark';
import Light from './Buttons/Light';

function Theme() {
  const { theme } = useTheme();

  return (
    <>
      {theme === 'light' ? <Dark /> : <Light />}
    </>
  )
}

export default Theme;
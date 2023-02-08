import { useState, useEffect } from 'react';

export function useLocalStorage(key: string, initalValue: string) {
  const getDefaultThemeMode = () => {
    const savedMode = localStorage.getItem(key);
    return savedMode ? savedMode : initalValue;
  }

  const [theme, setTheme] = useState(getDefaultThemeMode());

  useEffect(() => {
    localStorage.setItem(key, theme);
  }, [theme]);

  return { theme, setTheme };
}
import { createContext, useContext } from 'react';
import { ThemeContextType, ThemeProviderType } from '../types/theme';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ThemeContext = createContext({} as ThemeContextType)

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }: ThemeProviderType) {
  const { theme, setTheme } = useLocalStorage('theme', 'light');
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
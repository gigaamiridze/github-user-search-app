import React from 'react';
import { useTheme } from './context/ThemeContext';
// Importing components
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import UserData from './components/UserData/UserData';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <div className='container'>
        <Header />
        <SearchBox />
        <UserData />
      </div>
    </div>
  )
}

export default App;
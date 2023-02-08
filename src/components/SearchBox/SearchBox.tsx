import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useUser } from '../../context/UserContext';
import searchIcon from '../../assets/svg/search-icon.svg';
// Importing components
import Input from './Input';
import Button from './Button';

function SearchBox() {
  const [inputValue, setInputValue] = useState<string>('');

  const { getUser, error } = useUser();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getUser(inputValue);
    setInputValue('');
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='search-box'>
        <div className='wrapper-box'>
          <img className='search-icon' src={searchIcon} alt="search-icon" />
          <Input 
            inputValue={inputValue} 
            handleChange={handleChange} 
          />
        </div>
        <div className='wrapper-box'>
          {error && <span className='error-msg'>no result</span>}
          <Button />
        </div>
      </div>
    </form>
  )
}

export default SearchBox;
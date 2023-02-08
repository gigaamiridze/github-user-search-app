import React from 'react';
import { InputPropsType } from '../../types/input';

function Input(props: InputPropsType) {
  const { inputValue, handleChange } = props;

  return (
    <input
      type="text"
      placeholder="Search GitHub username..."
      className="search-input"
      name="search"
      id="search"
      value={inputValue}
      onChange={handleChange}
    />
  )
}

export default Input;
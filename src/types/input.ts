import { ChangeEvent } from 'react';

export type InputPropsType = {
  inputValue: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
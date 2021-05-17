import React from 'react';
import { IInput } from '../../Interfaces/AuthPage/Interfaces';
import style from './Input.module.scss';

const Input: React.FC<IInput> = ({
  placeholder,
  type,
  inputState,
  formKey,
  setInputState,
}: IInput) => {
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, [formKey]: event.target.value });
  };

  return (
    <input
      className={style.input}
      placeholder={placeholder}
      type={type}
      value={inputState[formKey]}
      onChange={(event) => {
        changeInput(event);
      }}
    />
  );
};

export default Input;

import React, { FC } from 'react';
import { IButtonAuth } from '../../../Interfaces/AuthPage/Interfaces';
import style from './ButtonAuth.module.scss';

const ButtonAuth: FC<IButtonAuth> = ({ text, submitData }: IButtonAuth) => {
  return (
    <button onClick={submitData} className={style.button} type="button">
      {text}
    </button>
  );
};

export default ButtonAuth;

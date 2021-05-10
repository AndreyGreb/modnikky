import React from 'react';
import { Link } from 'react-router-dom';
import { IButtonMainPage } from '../../../Interfaces/MainPage/Interfaces';

import style from './ButtonMainPage.module.scss';

const ButtonMainPage: React.FC<IButtonMainPage> = ({
  path,
  text,
}: IButtonMainPage) => {
  return (
    <>
      <Link className={style.button} to={path}>
        {text}
      </Link>
    </>
  );
};

export default ButtonMainPage;

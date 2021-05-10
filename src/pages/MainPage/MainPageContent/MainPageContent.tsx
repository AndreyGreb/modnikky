import React from 'react';
import { IMainPageContent } from '../../../components/common/Interfaces/MainPage/Interfaces';
import ButtonMainPage from '../../../components/common/UI/Buttons/ButtonMainPage/ButtonMainPage';

import style from './MainPageContent.module.scss';

const MainPageContent: React.FC<IMainPageContent> = ({
  textTitle,
  textMiddle,
  pathButton,
  textButton,
}: IMainPageContent) => {
  return (
    <>
      <span className={style['mainPage__content-title']}>{textTitle}</span>
      <span className={style['mainPage__content-middle']}>{textMiddle}</span>
      <ButtonMainPage path={pathButton} text={textButton} />
    </>
  );
};

export default MainPageContent;

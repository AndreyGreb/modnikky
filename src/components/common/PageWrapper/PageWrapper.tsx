import React from 'react';
import { IPageWrapper } from '../Interfaces/PageWraper/Interfaces';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import style from './PageWrapper.module.scss';

const PageWrapper: React.FC<IPageWrapper> = ({
  children,
  colorHeader,
}: IPageWrapper) => {
  return (
    <div className={style.page}>
      <Header colorHeader={colorHeader} />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;

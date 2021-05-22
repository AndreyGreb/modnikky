import React from 'react';
import { useSelector } from 'react-redux';
import getCategories from '../../../store/Categories/selectors';

import style from '../Catalog.module.scss';

const Categories = () => {

  const categories = useSelector(getCategories)

  return (
    <nav className={style.catalog__navbar}>
      <div className={style['catalog__navbar-categories']}>
        <span>CATEGORIES</span>
        <ul>
          {categories.map(item => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Categories;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCategory from '../../../http/productAPI';
import getCategoriesAction from '../../../store/Categories/action';
import getCategories from '../../../store/Categories/selectors';
import { IObject } from '../../../store/Categories/types';

import style from '../Catalog.module.scss';

const Categories = () => {
  

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategory().then((data) => dispatch(getCategoriesAction(data)));
    
  }, [dispatch]);
  const categories = useSelector(getCategories);
  return (
    <nav className={style.catalog__navbar}>
      <div className={style['catalog__navbar-categories']}>
        <span>CATEGORIES</span>
        <ul>
          {categories.category.map((item: IObject) => {
            // eslint-disable-next-line no-underscore-dangle
            return <li key={item._id}>{item.category}</li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Categories;

import React from 'react';

import style from '../Catalog.module.scss';

const Categories = () => {
  return (
    <nav className={style.catalog__navbar}>
      <div className={style['catalog__navbar-categories']}>
        <span>CATEGORIES</span>
        <ul>
          <li>TOPS</li>
          <li>NEW ARRIVALS</li>
          <li>COLLECTIONS</li>
          <li>TEES AND TANKS</li>
          <li>SHIRTS</li>
          <li>DRESSES</li>
          <li>JACKETS</li>
          <li>KNITWEAR</li>
          <li>JUMPSUITS</li>
          <li>BOTTOMS</li>
          <li>INTIMATES</li>
          <li>SHORTS</li>
          <li>JEANS</li>
          <li>SKIRTS</li>
          <li>SALE</li>
          <li>SHOP ALL</li>
        </ul>
      </div>
    </nav>
  );
};

export default Categories;

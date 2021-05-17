import React from 'react';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';

import style from './Catalog.module.scss';
import Categories from './Categories/Categories';

const Catalog = () => {
  return (
    <PageWrapper colorHeader="black">
      <section className={style.catalog}>
        <Categories />

        {/* product */}
        <section className={style.catalog__product}>
          {/* {getProduct.map((item) => {
            return (
              <Link
                key={item.id}
                className={style['catalog__product-item']}
                to={item.path}>
                <img
                  src={item.images[0].path}
                  alt={item.images[0].description}
                />
                <span className={style['catalog__product-item-price']}>
                  ${item.price}
                </span>
                <div className={style['catalog__product-item-description']}>
                  <span className={style['catalog__product-item-brand']}>
                    {item.brand}
                  </span>
                  <span>/</span>
                  <span className={style['catalog__product-item-name']}>
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })} */}
        </section>
      </section>
    </PageWrapper>
  );
};

export default Catalog;

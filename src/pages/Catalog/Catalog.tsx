import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import getProduct from '../../store/Products/selectors';

import style from './Catalog.module.scss';
import Categories from './Categories/Categories';

const Catalog = () => {
  const history = useHistory();
  const product = useSelector(getProduct);

  return (
    <PageWrapper colorHeader="black">
      <section className={style.catalog}>
        <Categories />

        {/* product */}
        <section className={style.catalog__product}>
          {product.map((item) => {
            return (
              <Link
                key={item.id}
                className={style['catalog__product-item']}
                to="/">
                <img src={item.img} alt={item.img} />
                <span className={style['catalog__product-item-price']}>
                  ${item.price}
                </span>
                <div className={style['catalog__product-item-description']}>
                  {/* <span className={style['catalog__product-item-brand']}>
                    {item.brand}
                  </span> */}
                  <span>/</span>
                  {/* <span className={style['catalog__product-item-name']}>
                    {item.name}
                  </span> */}
                </div>
              </Link>
            );
          })}
        </section>
      </section>
    </PageWrapper>
  );
};

export default Catalog;

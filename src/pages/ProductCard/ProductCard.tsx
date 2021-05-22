import React from 'react';

import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import ButtonAddToBasket from '../../components/common/UI/Buttons/ButtonAddToBasket/ButtonAddToBasket';

import style from './ProductCard.module.scss';

const ProductCard = () => {
  const product = {
    id: 1,
    price: 149.99,
    img: 'https://a.lmcdn.ru/img600x866/R/T/RTLAAD428501_13740757_1_v1_2x.jpg',
  };

  return (
    <PageWrapper colorHeader="black">
      <section className={style.productCard}>
        <div className={style.productCard__images}>
          <img src={product.img} alt={product.img} />
        </div>
        <div className={style.productCard__description}>
          {/* <span className={style["productCard__description-brand"]}>
                {product!.brand}
              </span> */}
          {/* <span className={style["productCard__description-name"]}>
                {item.name}
              </span> */}
          <span className={style['productCard__description-price']}>
            USD ${product.price}
          </span>
          <div className={style['productCard__description-size']}>
            <span className={style['size-title']}>SIZE</span>
            {/* <div className={style.wrapper}>
                  {product!.size.map((size) => {
                    return (
                      <Size
                        selectedSize={selectedSize}
                        selectSize={selectSize}
                        key={size.id}
                        size={size}
                      />
                    );
                  })}
                </div> */}
          </div>

          <ButtonAddToBasket />

          {/* <div className={style.productCard__questions}>
            <Question />
            <Question />
          </div> */}
        </div>
      </section>
    </PageWrapper>
  );
};

export default ProductCard;

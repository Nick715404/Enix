import styles from './NewProducts.module.scss';

import { useEffect } from 'react';
import { GetAllProductsFX } from '../../api/server/products';

import Button from '../button/Button';
import NewSwiper from '../new-swiper/NewSwiper';
import { useUnit } from 'effector-react';
import { $products } from '../../store/products';

export default function NewProducts() {

  useEffect(() => {
    GetAllProductsFX();
  }, []);

  const products = useUnit($products);

  return (
    <div className={styles.new}>
      <div className="container-small">
        <div className={styles.newWrapper}>
          <div className={styles.newHeader}>
            <h2 className={styles.newTitle}>Новинки</h2>
            <div className={styles.newBtn}>
              <Button href='/catalog' text='В каталог' />
            </div>
          </div>
          <div className={styles.content}>
            <NewSwiper data={products} />
          </div>
        </div>
      </div>
    </div>
  )
}

import styles from './Product.module.scss';
import { IProducts } from '@/interfaces/interfaces';

type Props = {
  product?: IProducts
}

export default function Product({ product }: Props) {

  const path = `http://localhost:3100/images/${product.thumbnailPath}`;

  return (
    <a
      className={styles.product}
      href={`/catalog/${product.id}`}>
      <div className={styles.imgbox}>
        <img className={styles.img}
          src={product.thumbnailPath}
          alt={product.title} />
      </div>
      <h3 className={styles.title}>{product.title}</h3>
    </a>
  )
}
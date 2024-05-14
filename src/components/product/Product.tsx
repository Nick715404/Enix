import { IProduct } from '../../interfaces/interfaces';
import styles from './Product.module.scss';


type Props = {
  product: IProduct
}

export default function Product({ product }: Props) {
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
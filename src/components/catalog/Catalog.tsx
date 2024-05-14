import styles from './Catalog.module.scss';

import Filter from '../filter/Filter';
import Products from '../products/Products';

type Props = {
  sortMode: boolean
}

export default function Catalog({ sortMode }: Props) {
  return (
    <div className={styles.catalog}>
      <h2 className={styles.title}>каталог</h2>
      {/* <Filter /> */}
      {/* <Products filtered={sortMode} /> */}
    </div>
  )
}
import styles from './Products.module.scss';
import Product from "../product/Product";
import { GetAllProductsFX } from '../../api/server/products';
import { IProduct } from '../../interfaces/interfaces';
import { useEffect } from 'react';
import { useUnit } from 'effector-react';
import { $products } from '../../store/products';
import { useQuery } from 'react-query';

type Props = {
  filtered: boolean
}

export default function Products({ filtered }: Props) {

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => GetAllProductsFX()
  });

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className={styles.grid}>
      {filtered ? data && data.slice(0, 8).map((product: IProduct) =>
        <Product key={product.id} product={product} />
      ) : data && data.map((product: IProduct) =>
        <Product key={product.id} product={product} />
      )}
    </div>
  )
}
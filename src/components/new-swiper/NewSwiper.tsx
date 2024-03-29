import styles from './NewSwiper.module.scss';

import { Swiper, SwiperSlide } from "swiper/react";
import { IProduct } from '../../interfaces/interfaces';
import Product from "../product/Product";
import 'swiper/css';

type Props = {
  data: IProduct[]
}

export default function NewSwiper({ data }: Props) {

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }

  const autoplay = {
    delay: 4500,
    disableOnInteraction: false,
  }

  return (
    <Swiper
      spaceBetween={20}
      breakpoints={breakpoints}
      autoplay={autoplay}
    >
      {data ? data.map((product: IProduct) => (
        <SwiperSlide key={product.id}>
          <Product product={product} />
        </SwiperSlide>
      )) : <div className={styles.oops}><h1>Упс, кажется что то пошло не так!</h1></div>}
    </Swiper>
  )
}
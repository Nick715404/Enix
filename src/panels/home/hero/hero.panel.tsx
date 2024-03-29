import styles from './hero.module.scss';

import Button from '../../../components/button/Button';

export default function HeroPanel() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <h1 className={styles.title}>
          <span className={styles.titleBig}>enix</span>
          <span className={styles.titleSmall}>для <strong className={styles.titleAccent}>тебя</strong></span>
        </h1>
        <div className={styles.heroBtn}>
          <Button href='/catalog' text='В каталог' />
        </div>
      </div>
    </div>
  )
}
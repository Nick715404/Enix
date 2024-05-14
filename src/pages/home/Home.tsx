import styles from './Home.module.scss';

import Marque from "../../components/marque/Marque"
import HeroPanel from "../../panels/home/hero/hero.panel"
import Button from '../../components/button/Button';
import Filter from '../../components/filter/Filter';
import Catalog from '../../components/catalog/Catalog';
import Products from '../../components/products/Products';

export default function Home() {
  return (
    <div id="home" className="home">
      <HeroPanel />

      <Marque top />

      <div className={styles.style}>
        <div className="container">
          <div className={styles.styleWrapper}>
            <h2 className={styles.styleTitle}>Enix  — Твой<br />уникальный стиль</h2>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <div className="container">
          <div className={styles.aboutWrapper}>
            <div className="container-small">
              <div className={styles.aboutTopContent}>
                <h2 className={styles.aboutTitle}>
                  Мы -<br />команда<br /><span className={styles.aboutTitleAccent}>enix</span>
                </h2>
                <p className={styles.aboutText}>
                  Деятельность нашей компании возможна благодаря коллективу талантливых и преданных профессионалов, чья страсть к моде сочетается с опытом в различных областях бизнеса.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.aboutBottom}>
            <div className="container-small">
              <div className={styles.aboutBottomContent}>
                <p className={styles.aboutBottomContentText}>Мы гордимся тем, что наша команда обладает разнообразными навыками и экспертизой, позволяющей нам успешно управлять продажами на маркетплейсах и создавать инновационные бренды одежды.</p>
                <div className={styles.aboutBottomContentBtn}>
                  <Button href='/about' text='Подробнее о нас' border />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marque />

      <div className={styles.best}>
        <div className="container-small">
          <div className={styles.bestWrapper}>
            <h2 className={styles.bestTitle}>Лучшее для тебя</h2>
            <Products filtered />
            <div className={styles.bestBtnWrapper}>
            <Button text='В каталог' href='/catalog' border />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
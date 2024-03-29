import styles from './Footer.module.scss';

// import { footerSocials, navLinks } from '@/constans/constants';

import FooterForm from '../footer-form/FooterForm';
// import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.form}>
          <FooterForm />
        </div>

        <div className={styles.nav}>
          <div className="container-small">
            <div className={styles.wrapper}>
              <div className={styles.content}>

                <div className={styles.logoBox}>
                  <div className={`${styles.logo}`}>
                    <a className={styles.link} href="/">
                      <img className={styles.img} src="/svg/logo.svg" alt="Логотип Enix" />
                    </a>
                  </div>
                </div>

                <div className={styles.socials}>
                  <ul className={styles.list}>

                  </ul>

                </div>

              </div>
              <div className={styles.info}>
                <div className={styles.menu}>
                  <ul className={styles.list}>
                    <li className={styles.titleBox}>
                      <h3 className={styles.title}>Меню</h3>
                    </li>
                  </ul>
                </div>
                <div className={styles.contacts}>
                  <ul className={styles.list}>
                    <li className={styles.titleBox}>
                      <h3 className={styles.title}>Контакты</h3>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.title}>Email</span>
                      <a className={styles.link} href='mailto:Home2stay@gmail.com'>Home2stay@gmail.com</a>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.title}>Телефон</span>
                      <a className={styles.link} href='tel: (505) 555-0125'>(505) 555-0125</a>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.title}>Адрес офиса</span>
                      <address className={styles.link}>6391 Elgin St. Celina, Delaware<br />10299</address>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a className={styles.up} href='#hero'>
            <img src="/svg/arrow-up.svg" alt="" />
          </a>
        </div>

        <div className={styles.copy}>
          <div className={styles.wrapper}>
            <span className={styles.text}>30XSales © 2024. Все права защищены.</span>
            <a href='#' className={styles.text}>Политика конфиденциальности</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
'use client'

import { NavLink } from 'react-router-dom';
import styles from './Socials.module.scss';

import Facebook from '/public/svg/facebook-black.svg';
import Instagramm from '/public/svg/inst.svg';
import Youtube from '/public/svg/youtube.svg';

// import { ISocialsImages } from '@/interfaces/interfaces';

export default function Socials() {


  return (
    <div className={styles.socials}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to={'/'}>
            <img className={styles.img} src='/svg/socials/Facebook.svg' alt='Enix facebook' />
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to={'/'}>
            <img className={styles.img} src='/svg/socials/Twitter.svg' alt='' />
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to={'/'}>
            <img className={styles.img} src='/svg/socials/Instagram.svg' alt='' />
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to={'/'}>
            <img className={styles.img} src='/svg/socials/YouTube.svg' alt='' />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
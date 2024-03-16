import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <NavLink to={'/'}>
        <img src="/svg/logo.svg" alt="" />
      </NavLink>
    </div>
  )
}
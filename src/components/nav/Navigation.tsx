import styles from './Navigation.module.scss';
import { navLinks } from '../../constants/constants';
import { INavLink } from '../../interfaces/interfaces';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className={`${styles.nav}`}>
      <ul className={styles.list}>
        {navLinks.map((link: INavLink) => (
          <li key={link.label} className={styles.item}>
            <NavLink to={link.href}
              className={({ isActive, isPending }) => {
                return isActive ? `${styles.link} ${styles.active}` :
                  isPending ? `${styles.link} ${styles.pending}` : `${styles.link}`
              }}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav >
  );
}

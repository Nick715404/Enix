import styles from './BurgerMenu.module.scss';

import { useState } from 'react';

export default function BurgerMenu() {

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className={styles.mobileMenu}>
      bb
    </div>
  )
}
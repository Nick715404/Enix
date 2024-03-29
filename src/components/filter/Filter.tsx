import styles from './Filters.module.scss';

import { filterTags } from '../../constants/constants';
import { IFilterTags } from '../../interfaces/interfaces';
import { useState } from 'react';

type Props = {}

export default function Filter({ }: Props) {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.filters}>
      <ul className={styles.list}>
        {filterTags.map((filter: IFilterTags, index) =>
          <li
            key={filter.id}
            data-value={`${filter.value}`}
            className={index === activeIndex ? `${styles.tag} ${styles.active}` : `${styles.tag}`}
            onClick={() => handleClick(index)}
          >
            {filter.label}
          </li>
        )}
      </ul>
    </div>
  )
}

import styles from './Accordion.module.scss';

export default function Accordion() {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionRow}>
        <div className={styles.accordion}></div>
        <div className=""></div>
      </div>
    </div>
  )
}
import styles from './Marque.module.scss';

type Props = {
  top?: boolean
}

export default function Marque({ top }: Props) {
  return (
    <div className={styles.marque} style={top ? { marginTop: '-190px' } : { marginTop: '0px' }}>
      <div className={`${styles.black}`}>
        <div className={styles.line}>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
        </div>
        <div className={styles.line}>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
          <span className={styles.text}>new</span>
        </div>
      </div>
      <div className={styles.green}>
        <div className={`${styles.line} ${styles.reverse}`}>
          <span className={styles.text}>enix для тебя</span>
          <span className={styles.text}>enix для тебя</span>
          <span className={styles.text}>enix для тебя</span>
          <span className={styles.text}>enix для тебя</span>
          <span className={styles.text}>enix для тебя</span>
        </div>
        <div className={`${styles.line} ${styles.reverse}`}>
          <span className={styles.text}>enix для тебя</span>
          <span className={styles.text}>enix для тебя</span>
          <span className={styles.text}>enix для тебя</span>
          <span className={styles.text}>enix для тебя</span>
          <span className={styles.text}>enix для тебя</span>
        </div>
      </div>
    </div >
  )
}
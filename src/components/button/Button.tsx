import styles from './Button.module.scss';

type Props = {
  href: string
  text: string
  border?: boolean
}

export default function Button({ href, text, border }: Props) {

  return (
    <a href={href} className={styles.link} style={border ? {border: '1px solid #fff'} : {}}>
      <span className={styles.text}>{text}</span>
      <img className={styles.img} src="/svg/btn-arrow.svg" alt="" />
    </a>
  )
}
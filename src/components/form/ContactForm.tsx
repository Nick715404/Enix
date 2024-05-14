import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';
import { useState } from 'react';

type Props = {
  mode?: boolean
}

export default function ContactForm({ mode }: Props) {
  const [success, setSuccess] = useState<boolean>(false);
  const { formState: { errors }, reset, handleSubmit, register } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: unknown) => {
    console.log(data);
    reset();
    setSuccess(true);
  }

  if (success) {
    return (
      <h1>Мы скоро свяжемся<br /> с вами!</h1>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.title}>Связаться с нами</h2>
      <p className={styles.text}>
        Заполните форму ниже, оставьте заявку и мы свяжемся с вами<br /> в ближайшее время
      </p>
      <div className={styles.row}>
        <div className={styles.inputBox}>
          <label htmlFor="name">Имя</label>
          <input
            placeholder='Введите ваше имя'
            type="text"
            id="name"
            {...register('name', {
              required: 'Поле - Имя обязательно к заполнению'
            })}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="mail">Email</label>
          <input
            placeholder='Введите ваш Email'
            type="email"
            id="mail"
            {...register('mail', {
              required: 'Поле - email обязательно к заполнению'
            })}
          />
        </div>
      </div>
      <div className={styles.errors}>
        {errors?.name ? <p className={styles.errorMessage}>{`${errors?.name.message}`}</p> : null}
        {errors?.mail ? <p className={styles.errorMessage}>{`${errors?.mail.message}`}</p> : null}
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="description">Комментарий</label>
        <textarea placeholder='Ваш комментарий' name="description" id="description" />
      </div>
      <div className={styles.checkBox}>
        <input
          type="checkbox"
          id="iAgree"
          {...register('agree', {
            required: 'Согласитесь с условиями'
          })}
        />
        <label htmlFor="iAgree">Я принимаю</label>
      </div>
      <div className={styles.errors}>
        {errors?.agree ? <p className={styles.errorMessage}>{`${errors?.agree.message}`}</p> : null}
      </div>
      <div className={styles.inputBox}>
        {mode ?
          <button data-color="white" className={styles.btn} type="submit">Отправить</button>
          :
          <button className={styles.btn} type="submit">Отправить</button>}
      </div>
    </form>
  )
}
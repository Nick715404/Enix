'use client'

import { useState } from 'react';
import styles from './Form.module.scss';

type Props = {
  mode?: boolean
}

export default function ContactForm({ mode }: Props) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const [sended, setIsSended] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { email, name, description } = formData;

    if (email === "" || name === "" || description === "") {
      return null
    }

    fetch(`/api/send-mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        name,
        description
      })
    })
      .then(r => r.json())
      .then(d => {
        if (d?.ok) {
          setIsSended(true)
        }
      })
      .catch(e => console.log(e.message))

  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Связаться с нами</h2>
      <p className={styles.text}>Заполните форму ниже, оставьте заявку и мы свяжемся с вами<br /> в ближайшее время</p>
      <div className={styles.row}>
        <div className={styles.inputBox}>
          <label htmlFor="name">Имя</label>
          <input value={formData.name} onChange={(e) => setFormData(prev => {
            return { ...prev, name: e.target.value }
          })} placeholder='Введите ваше имя' type="text" name="name" id="name" />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="mail">Email</label>
          <input value={formData.email} onChange={(e) => setFormData(prev => {
            return { ...prev, email: e.target.value }
          })} placeholder='Введите ваш Email' type="email" name="mail" id="mail" />
        </div>
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="description">Комментарий</label>
        <textarea value={formData.description} onChange={(e) => setFormData(prev => {
          return { ...prev, description: e.target.value }
        })} placeholder='Ваш комментарий' name="description" id="description" />
      </div>
      <div className={styles.checkBox}>
        <input type="checkbox" name="iAgree" id="iAgree" required />
        <label htmlFor="iAgree">Я принимаю</label>
      </div>
      <div className={styles.inputBox}>
        {mode ? <button data-color="white" className={styles.btn} type="submit">Отправить</button> : <button className={styles.btn} type="submit">Отправить</button>}
      </div>
    </form>
  )
}
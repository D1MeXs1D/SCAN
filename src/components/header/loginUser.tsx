import React from 'react'
import styles from "../../styles/header/header.module.css"
export default function LoginUser() {
  return (
    <div className={styles.loginAndRegister}>
      <span className={styles.register}>Зарегистрироваться</span>
      <div className={styles.line}></div>
      <span className={styles.login}>Войти</span>      
    </div>
  )
}

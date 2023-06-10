import React from 'react'
import IconForLoginPage from './iconForLoginPage';
import style from '../../../styles/loginPage/loginPageStyle.module.css'
import TextLoginPage from './textLoginPage';
import ModalWindow from './modalWindow';

export default function LoginPage() {

  fetch('https://gateway.scan-interfax.ru/api/v1/sf_student1/4i2385j').then( response => {
    return 
  })

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.tittleFromLogin}>
          <TextLoginPage/>
          <IconForLoginPage/>
        </div>
        <ModalWindow/>
      </div>
    </div>
  )
}

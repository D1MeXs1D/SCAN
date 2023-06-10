import style from '../../../styles/loginPage/loginPageStyle.module.css';
import castle from '../../../image/icons/forLoginPage/castle.svg';
import iconGoogle from '../../../image/icons/forLoginPage/google.svg';
import iconFacebook from '../../../image/icons/forLoginPage/facebook.svg';
import iconYandex from '../../../image/icons/forLoginPage/yandex.svg';
import Module from 'module';


export default function ModalWindow() {

  type textFields = {
    inputValue: string;
  }

  type arrayInputTypes = {
    tittle:string, type: string
  }


  const arrayInputs: arrayInputTypes [] = [
    {tittle: 'Логин или номер телефона:',
    type: 'text'
    },
    {tittle: 'Пароль:',
    type: 'password'
    }];

  const arrayImage= [iconGoogle, iconFacebook, iconYandex]

  return (
    <div className={style.modalWindow}>
      <img className={style.imageCastle} src={castle} alt="castle"/>
      <div className={style.window}>
        <div className={style.option}>
          <span>Войти</span>
          <span>Зарегистрироваться</span>
        </div>
        <>
          {arrayInputs.map((item, index) => {
            return (
              <div className={style.textForLogin} key={index}>
                <span className={style.span}>{item.tittle}</span>
                <input type={item.type} className={style.input}/>
              </div>
            )
          })}
          <button className={style.buttonOne}>Войти</button>
          <button className={style.buttonTwo}>Восстановить пароль</button>

          <div className={style.bottomButtons}>
          <span className={style.tittleForButtons}>Войти через:</span>
          <div className={style.buttons}>
            {arrayImage.map((item, index) => {
              return (<div className={style.buttonSocialNetwork} key={index}>
                <img src={item} alt='#' />
              </div>)
            })}
          </div>
          </div>
           
        </>
      </div>
    </div>
  )
}

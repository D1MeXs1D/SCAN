import IconPeople from './iconPeople'
import styles from '../../../styles/mainPage/index.module.css';
export default function SectionRequest() {
  return (
    <div className={styles.sectionRequest}>
      <div className={styles.text}>
        <span>сервис по поиску публикаций о компании по его ИНН</span>
        <span>Комплексный анализ публикаций, получение данных 
          в формате PDF на электронную почту.</span>
        <div className={styles.button}>Запросить данные</div>
      </div>
      <IconPeople/>
    </div>
  )
}

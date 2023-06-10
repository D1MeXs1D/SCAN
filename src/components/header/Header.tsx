import styles from "../../styles/header/header.module.css"
import LoginUser from "./loginUser"
import Logo from './logo'
import Menu from './menu'

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.wrapper}>
            <Logo/>
            <Menu/>
            <LoginUser/>
        </div>
    </div>
  )
}

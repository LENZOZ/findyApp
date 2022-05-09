import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import styles from "./NavBar.module.css";
export function NavBar() {
  return (
    <header className={styles.header}>
      <script src="https://kit.fontawesome.com/9dfeb6bc76.js" crossorigin="anonymous"></script>

      <nav className={styles.nav}>
        <a href="/" className={`${styles.navLink} ${styles.logo}`}>
          <img src={logo} alt="Findy" />
        </a>
        
        	<button className={styles.navToggle} >
           <FaBars/>
  </button>

        <ul className={styles.navMenu}>
     
          <li class={styles.navMenuItem}>
            <a href="/" className={`${styles.navLink} ${styles.navMenuLink}`}>
              Iniciar sesión
            </a>
          </li>
          <li class={styles.navMenuItem}>
            <a href="/" className={`${styles.navLink} ${styles.navMenuLink}`}>
              Regístrarse
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

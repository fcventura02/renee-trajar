import { useState } from "react";
import styles from "./header.module.scss";
import logo from "../../img/logo.svg";
import logo2 from "../../img/logo2.svg";

export function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 300 && window.screen.availWidth > 800) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", function () {
    changeBg();
  });

  return (
    <header className={`${styles.header} ${navbar ? styles.active : ""}`}>
      <div className={`${styles.container} container`}>
        <a href="#">
          {navbar ? (
            <img
              height="57px"
              src={logo2}
              alt="Renee Trajar logo"
            />
          ) : (
            <img
              height="57px"
              src={logo}
              alt="Renee Trajar logo"
            />
          )}
        </a>
        <input type="checkbox" id="menu" className={styles.menu_btm} />
        <label htmlFor="menu" className={styles.menuHamburguer}>
          <div className={styles.icon}></div>
        </label>
        <nav className={styles.menuActive}>
          <a href="#empresa">empresa</a>
          <a href="#camisaria">camisaria</a>
          <a href="#alfaiataria">alfaiataria</a>
          <a href="#depoimentos">depoimentos</a>
          <a href="#contato">contato</a>

          <div className={styles.contact}>
            <p>TELEFONES</p>
            <span>+55 (11) 3088-0757</span>
            <p>E-MAIL</p>
            <span>renee@reneetrajar.com.br</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

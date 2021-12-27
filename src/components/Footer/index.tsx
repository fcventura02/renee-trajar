import styles from "./footer.module.scss";
import logo from "../../img/logo2.svg";
import arrowUp from "../../img/arrowUp.svg";
import { FloatingButton } from "..";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.enterprise}>
          <img height="57px" src={logo} alt="Renee Trajar logo" />
          <span>
            CNPJ<span>:04.487.685/0001-01</span>
          </span>
        </div>
        <div>
          <span>
            Copyright: 2021 © Renee Trajar - Todos os direitos reservados.
          </span>
        </div>
      </div>
      <FloatingButton href="#" type="move_up">
        <img src={arrowUp} alt="Subir" />
      </FloatingButton>
    </footer>
  );
}

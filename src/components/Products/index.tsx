import styles from "./products.module.scss";
import imageCamisaria from "../../img/camisaria.png";
import imageAlfaiataria from "../../img/alfaiataria.png";
export function Products() {
  return (
    <>
      <section className={styles.products}>
        <div id="camisaria" className={`${styles.container} container`}>
          <div className={styles.ilustration}>
            <img width="100%" src={imageCamisaria} alt="" />
          </div>
          <div className={styles.description}>
            <div>
              <h2>Camisaria</h2>
              <p>confeccionadas artesanalmente</p>
              <ul>
                <li>100% Algodão</li>
                <li>Monograma</li>
                <li>Slim</li>
                <li>Nacionais e Importadas</li>
                <li>Tradicionais e Esportivas</li>
                <li>Casamentos</li>
              </ul>
              <a href="#">Quero um orçamento</a>
            </div>
          </div>
        </div>
        <div id="alfaiataria" className={`${styles.container} container`}>
          <div className={styles.ilustration}>
            <img width="100%" src={imageAlfaiataria} alt="" />
          </div>
          <div className={styles.description}>
            <div>
              <h2>Alfaiataria</h2>
              <p>totalmente  feito a mão  sob medida</p>
              <ul>
                <li>Fio Super 120 e 130</li>
                <li>Lã fria Australiana</li>
                <li>Botões Importados</li>
                <li>Ternos e Calças</li>
                <li>Paletós e Smokings</li>
                <li>Sociais e Esportivos</li>
              </ul>
              <a href="#">Quero um orçamento</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import imgModel from "../../img/model-3.png";
import styles from "./promotion.module.scss";
export function Promotion() {
  return (
    <section className={styles.promotion}>
      <div className={`${styles.container} container`}>
        <div>
          <h2>Condição Imperdível</h2>
          <p>Compre hoje e garanta:</p>
          <ul>
            <li>
              12% de desconto e pagamento em até <span>3x sem juros</span> ;
            </li>
            <li>
              Até <span>10 meses</span> para confeccionar sua roupa. Não se
              preocupe se suas medidas aumentaram ou diminuíram, estará sempre
              elegante;{" "}
            </li>
            <li>
              Condição muito especial por <span>tempo limitado</span>;{" "}
            </li>
            <li>
              Poder presentear alguém com uma roupa de alta costura,{" "}
              <span>exclusiva</span>.
            </li>
          </ul>
          <a href="#">Garanta essa condição especial!</a>
        </div>
        <div>
          <img src={imgModel} alt="Modelo vestindo terno cinza elegante" />
        </div>
      </div>
    </section>
  );
}

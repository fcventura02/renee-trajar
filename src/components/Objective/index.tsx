import iconExperiencia from "../../img/experiencia.svg";
import iconConfianca from "../../img/confianca.svg";
import iconQualidade from "../../img/qualidade.svg";
import styles from "./objective.module.scss";

export function Objective() {
  return (
    <section>
      <div className={`${styles.container} container`}>
        <div>
          <img src={iconExperiencia} alt="" />
          <h3>Qualidade</h3>
          <p>Camisaria e Alfaiataria 100% artesanal.</p>
        </div>
        <div>
          <img src={iconConfianca} alt="" />
          <h3>Confiança</h3>
          <p>Atendimento personalizado no escritório ou residência.</p>
        </div>
        <div>
          <img src={iconQualidade} alt="" />
          <h3>Experiência</h3>
          <p>Tradição e modernidade proporcionando elegância.</p>
        </div>
      </div>
    </section>
  );
}

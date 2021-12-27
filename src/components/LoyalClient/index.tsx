import styles from "./loyalClient.module.scss";
import imgNelsonGarey1 from "../../img/model.png";
import imgNelsonGarey2 from "../../img/model-2.png";
export function LoyalClient() {
  return (
    <section className={styles.container}>
      <div className={styles.contain_image}>
        <img src={imgNelsonGarey2} alt="" />
        <img src={imgNelsonGarey1} alt="" />
      </div>
      <div className={styles.depoiment}>
        <div className={`${styles.depoiment_container} container`}>
          <div className={`${styles.depoiment_contain}`}>
            <p>
              “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço
              é impecável em todos os detalhes, desde a costura ao caimento. O
              Renee tem uma equipe de mestre!”
            </p>
            <span>Nelson Garey</span>
            <span>Advogado | Nelson Garey Advogados Associados</span>
          </div>
        </div>
      </div>
    </section>
  );
}

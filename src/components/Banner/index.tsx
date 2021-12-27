import styles from "./banner.module.scss";
export function Banner() {
  return (
    <section className={styles.banner}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>Elegante é ter um</span>
            <span>Alfaiate</span>
            <span> para chamar de seu.</span>
          </h1>
          <p className={styles.subtitle}>
            COMPRE HOJE,
            <span> PAGUE EM ATÉ 3X COM 12% DE DESCONTO</span> E TENHA 10 MESES
            PARA CONFECCIONAR!
          </p>
          <a className={styles.button} href="#">Faça já um Orçamento</a>
        </div>
      </div>
    </section>
  );
}

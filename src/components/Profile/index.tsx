import imgReneeTrajar from "../../img/perfil-Renee-Trajar.png";
import styles from "./profile.module.scss";
import iconCitation from "../../img/citation.svg";
export function Profile() {
  return (
    <section id="empresa">
      <div className={`${styles.container} container`}>
        <h2>Renee Trajar</h2>
        <img src={imgReneeTrajar} alt="Renee Trajar" />
        <div>
          <p>
            Com mais de 35 anos de experiência em camisas, calças e ternos sob
            medida, possuímos profissionais experientes e altamente
            qualificados.
            <br />
            <br />
            Cada cliente tem seu molde exclusivamente desenvolvido para seu
            biotipo através das medidas tiradas pelo próprio Sr. Renee, no
            escritório ou residência do cliente.
          </p>
          <p>
            “Nosso objetivo é superar a expectativa do cliente
            proporcionando-lhe satisfação ao usar nossos produtos, aliado a um
            relacionamento franco e honesto, valorizando o ser humano.”
          </p>
          <img src={iconCitation} alt="" />
          <span>Renee Trajar</span>
        </div>
        <a href="#">Agende uma visita!</a>
      </div>
    </section>
  );
}

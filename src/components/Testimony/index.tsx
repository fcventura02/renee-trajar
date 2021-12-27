import styles from "./testimony.module.scss";
import iconArrowLeft from "../../img/arrowLeft.svg";
import iconArrowRigth from "../../img/arrowRigth.svg";
import imgTestimony1 from "../../img/testimony/person.png";
import imgTestimony5 from "../../img/testimony/person-5.png";
import imgTestimony2 from "../../img/testimony/person-2.png";
import imgTestimony3 from "../../img/testimony/person-3.png";
import imgTestimony4 from "../../img/testimony/person-4.png";
import { useEffect, useState } from "react";

export function Testimony() {
  const [indexCarousel, setIndexCarousel] = useState(0);
  const itemCarrousel = [
    {
      name: "Josimar Henrique da Silva",
      message: `“Há mais de 10 anos sou cliente da Renee Trajar. A qualidade,
			caimento e possibilidade de customização das roupas, aliados ao
			excelente atendimento e prazo de entrega são fatores decisivos
			para mim.”`,
      thumbnail: imgTestimony1,
      profession: "Diretor Presidente  |  Grupo Hebron",
    },
    {
      name: "William H. M. Garey",
      message: `“Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já têm uma história de décadas com o querido Renee.
			O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.”`,
      thumbnail: imgTestimony5,
      profession: "Advogado  |   Nelson Garey Advogados Associados",
    },
    {
      name: "Domingos Orestes Chiomento",
      message: `“Seu corte tanto de camisas, bem como de ternos são impecáveis,
			muitos dos meus amigos tem elogiado a vestimenta.
			Recomendo para quem gosta de perfeição. Estamos nos servindo do
		  trabalho do Renee Trajar há mais de vinte anos.”`,
      thumbnail: imgTestimony3,
      profession: "DOC Contabilidade Empresarial",
    },
    {
      name: "José Mauro Marques",
      message: `“Tenho a honra de afirmar que enquanto nossas vidas perdurarem
			o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, 
			ao profissional competente e idôneo, sempre pontual, atencioso e preocupado 
			em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.”`,
      thumbnail: imgTestimony4,
      profession: "Advogado",
    },
    {
      name: "José Mauro Marques",
      message: `“Conheço o excelente e qualificado trabalho do Renee Trajar
			 e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível,
			 sempre com preços justos, produtos de excelente qualidade e especialmente
			 tudo é feito com muito cuidado e qualidade. Cumpre os prazos com 
			 atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.”`,
      thumbnail: imgTestimony2,
      profession: "Advogado",
    },
  ];

  useEffect(() => {
    const setTime = setTimeout(nextSlide, 5000);
    return () => clearTimeout(setTime);
  }, [indexCarousel]);
  
  function nextSlide() {
    if (indexCarousel < itemCarrousel.length - 1)
      return setIndexCarousel(indexCarousel + 1);
    return setIndexCarousel(0);
  }
  function backSlide() {
    if (indexCarousel > 0) return setIndexCarousel(indexCarousel - 1);
    return setIndexCarousel(itemCarrousel.length - 1);
  }
  return (
    <section id="depoimentos" className={styles.testimony}>
      <div className={`${styles.container} container`}>
        <h2>Depoimentos</h2>
        <div className={styles.container_carrousel}>
          {itemCarrousel.map(
            ({ name, message, thumbnail, profession }, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.slide} ${
                    index === indexCarousel && styles.active
                  }`}
                >
                  <img src={thumbnail} alt="thumbnail" />
                  <p>{message}</p>
                  <span>{name}</span>
                  <span>{profession}</span>
                </div>
              );
            }
          )}
        </div>
        <button
          className={`${styles.next_button}`}
          onClick={nextSlide}
          title="Próximo slide"
        >
          <img src={iconArrowRigth} alt="" />
        </button>
        <button
          className={`${styles.back_button}`}
          onClick={backSlide}
          title="Slide anterior"
        >
          <img src={iconArrowLeft} alt="" />
        </button>
        <div className={`${styles.container_circle_button}`}>
          {itemCarrousel.map((_, index) => (
            <button
              key={index}
              title={`Slide ${index + 1}`}
              className={`${styles.circle_button} ${
                index === indexCarousel && styles.active
              }`}
              onClick={() => setIndexCarousel(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

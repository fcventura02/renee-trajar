import { ChangeEvent, useState } from "react";
import styles from "./contacts.module.scss";
export function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [erro, setErro] = useState({
    name: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (name.trim() === "" || name.length < 2) {
      return setErro({ name: "name", message: "Entre com um valor válido" });
    }
    if (email.trim() === "" || !validEmail(email)) {
      return setErro({ name: "email", message: "Entre com um E-mail válido" });
    }
    if (message.trim() === "") {
      return setErro({
        name: "message",
        message: "Entre com uma mensagem",
      });
    }
  };

  function validEmail(mail: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(mail);
  }

  return (
    <section id="contato" className={styles.contacts}>
      <h2>Contato</h2>
      <div className={`${styles.container} container`}>
        <div className={styles.container_forms}>
          <form onSubmit={handleSubmit} noValidate={true}>
            <div className={styles.input}>
              <span className={styles.erro}>
                {erro.name === "name" && erro.message}
              </span>
              <input
                type="text"
                name="name"
                placeholder=" "
                onChange={handleChange}
                value={name}
                className={styles.input_field}
                required
              />
              <label htmlFor="name" className={styles.input_label}>
                Nome
              </label>
            </div>
            <div className={styles.input}>
              <span className={styles.erro}>
                {erro.name === "email" && erro.message}
              </span>
              <input
                type="email"
                name="email"
                placeholder=" "
                onChange={handleChange}
                title="erro"
                value={email}
                className={styles.input_field}
                required
              />
              <label htmlFor="email" className={styles.input_label}>
                E-mail
              </label>
            </div>
            <div className={styles.input}>
              <span className={styles.erro}>
                {erro.name === "message" && erro.message}
              </span>
              <textarea
                name="message"
                placeholder=" "
                onChange={handleChange}
                value={message}
                className={styles.input_field}
                required
              ></textarea>
              <label htmlFor="message" className={styles.input_label}>
                Mensagem
              </label>
            </div>
            <button type="submit" className={styles.submit}>
              Enviar Mensagem
            </button>
          </form>
        </div>
        <div className={styles.info}>
          <p>Telefone</p>
          <span>+55 (11) 3088-0757</span>
          <p>E-mail</p>
          <span>renee@reneetrajar.com.br</span>
          <p>Atendimento Personalizado</p>
          <a href="#">Clique aqui!</a>
        </div>
      </div>
    </section>
  );
}

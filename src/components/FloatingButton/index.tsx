import { ReactChild } from "react";
import iconWhatsapp from "../../img/socialMidia/whatsapp.svg";
import styles from "./floatingButton.module.scss";
interface Props {
  type: string;
  href: string;
  children?: ReactChild;
}
export function FloatingButton({ type, href, children }: Props) {
  return (
    <a className={styles[type]} href={href}>
      {children ? (
        children
      ) : (
        <img width="100%" height="100%" src={iconWhatsapp} alt="whatsapp" />
      )}
    </a>
  );
}

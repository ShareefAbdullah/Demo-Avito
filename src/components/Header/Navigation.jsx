import React from "react";
import heart from "../../assets/headerHeart.svg";
import message from "../../assets/headerMessage.svg";
import avatar from "../../assets/headerAvatar.svg";
import { Button } from "../Button";
import styles from "./header.module.css";


export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.heart}>
        <img src={heart} alt="heart" />
      </div>
      <div className={styles.message}>
        <img src={message} alt="message" />
      </div>
      <div className={styles.advert}>
        Мои объявления
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
        <p>Lincode</p>
      </div>
      <Button text="Разместить объявление" color="white" width="200px"/>
    </div>
  );
};

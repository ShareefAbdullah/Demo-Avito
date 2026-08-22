//library
import React from "react";
import { Link } from "react-router-dom";
//components
import heart from "../../assets/headerHeart.svg";
import message from "../../assets/headerMessage.svg";
import avatar from "../../assets/headerAvatar.svg";
import { Button } from "../Button/Button";
//styles
import styles from "./header.module.css";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.heart}>
        <img src={heart} alt="heart" />
      </div>
      <div className={styles.message}>
        <Link to="/messages">
          <img src={message} alt="message" />
        </Link>
      </div>
      <div className={styles.advert}>Мои объявления</div>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
        <p>Lincode</p>
      </div>
      <Link to="/new-ad">
        <Button text="Разместить объявление" color="white" width="200px" />
      </Link>
    </div>
  );
};

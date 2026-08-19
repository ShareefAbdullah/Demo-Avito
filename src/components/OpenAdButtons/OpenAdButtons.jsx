//library
import React from "react";
//components
import { Button } from "../Button/Button";
import heart from "../../assets/open-ad-heart.svg";
import compare from "../../assets/open-ad-compare.svg";
//styles
import styles from "./open-ad-buttons.module.css";

export const OpenAdButtons = () => {
  return (
    <div className={styles.open_ad_buttons_container}>
      <Button
        text="Добавить в избранное"
        color="white"
        width="200px"
        icon={heart}
      />
      <Button text="Сравнить" color="white" width="150px" icon={compare} />
    </div>
  );
};

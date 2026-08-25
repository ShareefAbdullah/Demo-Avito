//library
import React from "react";
//components
import img from "../../assets/adImg.svg";
//styles
import styles from "./ad.module.css";

export const Ad = () => {
  return (
    <div className={styles.ad_container}>
      <h1>Мои объявления</h1>
      <div className={styles.border_bottom}>
        <div className={styles.active_archive}>
          <div className={styles.active}>
            <h3>Активные</h3>
          </div>
          <div className={styles.archive}>
            <h3>Архив</h3>
          </div>
        </div>
      </div>
      <div className={styles.ad_block}>
        <div className={styles.ad_img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.ad_text}>
          <h2>Курсы программирования (Frontend-разработка)</h2>
          <h3>35.000₽ за услугу</h3>
          <p>Чеченская Республика, Грозный</p>
        </div>
      </div>
    </div>
  );
};

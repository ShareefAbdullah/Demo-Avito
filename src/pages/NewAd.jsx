//library
import React from "react";
//components
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
//styles
import styles from "./new-ad.module.css";

export const NewAd = () => {
  return (
    <div className={styles.new_ad_container}>
      <h1>Разместить объявление</h1>
      <div className={styles.ad_title}>
        <h4>Название объявления</h4>
        <Input placeholder={""} width="500px" />
      </div>
      <div className={styles.ad_description}>
        <h4>Описание</h4>
        <textarea></textarea>
      </div>
      <div className={styles.ad_price}>
        <h4>Цена</h4>
        <select>
          <option value="1000₽">1000₽</option>
          <option value="2000₽">2000₽</option>
          <option value="3000₽">3000₽</option>
          <option value="4000₽">4000₽</option>
          <option value="5000₽">5000₽</option>
          <option value="6000₽">6000₽</option>
          <option value="7000₽">7000₽</option>
          <option value="8000₽">8000₽</option>
          <option value="9000₽">9000₽</option>
          <option value="10000₽">10.000₽</option>
          <option value="11000₽">11.000₽</option>
          <option value="12000₽">12.000₽</option>
          <option value="13000₽">13.000₽</option>
          <option value="14000₽">14.000₽</option>
          <option value="15000₽">15.000₽</option>
          <option value="16000₽">16.000₽</option>
          <option value="17000₽">17.000₽</option>
          <option value="18000₽">18.000₽</option>
          <option value="19000₽">19.000₽</option>
          <option value="20000₽">20.000₽</option>
        </select>
        <h4>Ввести цену вручную:</h4>
        <Input type="number" width="500px" />
      </div>
      <div className={styles.ad_button}>
        <Button text="Отправить" color="white" width="200px" />
      </div>
    </div>
  );
};

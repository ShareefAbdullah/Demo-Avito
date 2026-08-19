//library
import React from "react";
//components
import { Button } from "../../Button/Button";
//styles
import styles from "../content.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Поиск по объявлениям" />
      <Button text="Найти" color="white" width="200px" />
    </div>
  );
};

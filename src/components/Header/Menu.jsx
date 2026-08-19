//library
import React from "react";
//styles
import styles from "./header.module.css";

export const Menu = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <li>Для бизнеса</li>
        <li>Lincode Avito Pro</li>
        <li>Вакансии</li>
        <li>Помощь</li>
        <li>Каталоги</li>
      </ul>
    </div>
  );
};

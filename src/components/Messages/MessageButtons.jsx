import React from "react";
import styles from "../../pages/messages.module.css";
import { Button } from "../Button/Button";

export const MessagesButtons = () => {
  return (
    <div className={styles.message_buttons}>
      <div className={styles.all_messages}>
        <Button text="Все сообщения" width="200px" color="white" />
      </div>
      <div className={styles.filter_messages}>
        <Button text="Фильтр" width="200px" color="white" />
      </div>
      <div className={styles.search_messages}>
        <input type="text" placeholder="Поиск по сообщениям..." />
      </div>
    </div>
  );
};

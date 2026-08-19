//library
import React from "react";
//styles
import styles from "../../pages/messages.module.css";

export const MessageMenuRating = () => {
  return (
    <div className={styles.message_menu_rating}>
      <span>5,0</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  );
};

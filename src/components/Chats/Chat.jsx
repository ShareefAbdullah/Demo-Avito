import React from "react";
import avatar from "../../assets/userAvatar.svg";
import styles from "../../pages/messages.module.css";

export const Chat = ({ chat }) => {
  return (
    <div className={styles.chat}>
      <div className={styles.chat_avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles.chat_text_block}>
        <h3>{chat.userName}</h3>
        <p>{chat.adTitle}</p>
        <p className={styles.chat_message}>{chat.message}</p>
      </div>
    </div>
  );
};

import React from "react";
import { MessagesButtons } from "./MessageButtons";
import { Chats } from "../Chats/Chats";
import styles from "../../pages/messages.module.css";

export const Messages = () => {
  return (
    <div className={styles.messages}>
      <h2>Сообщения</h2>
      <MessagesButtons />
      <Chats />
    </div>
  );
};

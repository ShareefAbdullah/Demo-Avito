//library
import React from "react";
//components
import { MessagesButtons } from "./MessageButtons";
import { Chats } from "../Chats/Chats";
//styles
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

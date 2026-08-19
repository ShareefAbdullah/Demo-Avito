//library
import React from "react";
//components
import { ChatsArray } from "./Chats-mock";
import { Chat } from "./Chat";
//styles
import styles from "../../pages/messages.module.css";

export const Chats = () => {
  return (
    <div className={styles.chats}>
      {ChatsArray.map((chat) => {
        return <Chat chat={chat} />;
      })}
    </div>
  );
};

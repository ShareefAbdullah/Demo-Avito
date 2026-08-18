import React from "react";
import { ChatsArray } from "./Chats-mock";
import { Chat } from "./Chat";
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

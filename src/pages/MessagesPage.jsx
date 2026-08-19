//library
import React from "react";
//components
import { MessageMenu } from "../components/MessageMenu/MessageMenu";
import { Messages } from "../components/Messages/Messages";
//styles
import styles from "./messages.module.css";

export const MessagesPage = () => {
  return (
    <div>
      <div className={styles.messages_container}>
        <MessageMenu />
        <Messages />
      </div>
    </div>
  );
};

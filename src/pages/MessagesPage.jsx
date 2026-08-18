import React from "react";
import { MessageMenu } from "../components/MessageMenu/MessageMenu";
import { Messages } from "../components/Messages/Messages";

import styles from "./messages.module.css";
import { Footer } from "../components/Footer/Footer";

export const MessagesPage = () => {
  return (
    <div>
      <div className={styles.messages_container}>
        <MessageMenu />
        <Messages />
      </div>
      <Footer />
    </div>
  );
};

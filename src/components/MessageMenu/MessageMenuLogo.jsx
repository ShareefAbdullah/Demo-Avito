import React from "react";
import logo from "../../assets/messageMenuLogo.svg";
import styles from "../../pages/messages.module.css";

export const MessageMenuLogo = () => {
  return (
    <div className={styles.message_menu_logo}>
      <img src={logo} alt="" />
    </div>
  );
};

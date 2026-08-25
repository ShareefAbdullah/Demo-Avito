//library
import React from "react";
//components
import { MessageMenu } from "../components/MessageMenu/MessageMenu";
import { Ad } from "../components/Ad/Ad";
//styles
import styles from "./my-ads.module.css";

export const MyAds = () => {
  return (
    <div className={styles.my_ads_container}>
      <MessageMenu />
      <Ad />
    </div>
  );
};

import React from "react";
import styles from "../content.module.css";
import { Cards } from "./Cards/Cards";

export const RecommendedAds = () => {
  return (
    <div className={styles.recommended_ads}>
      <h1>Рекомендации для вас</h1>
      <Cards />
    </div>
  );
};

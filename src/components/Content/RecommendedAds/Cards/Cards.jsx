//library
import React from "react";
import { useSelector } from "react-redux";
//components
import { Card } from "./Card";
//styles
import styles from "./cards.module.css";

export const Cards = () => {
  const cards = useSelector((state) => state.homeAds.homeAds);
  return (
    <div className={styles.cards}>
      {cards.map((card, index) => (
        <Card card={card} key={card.id || index} />
      ))}
    </div>
  );
};

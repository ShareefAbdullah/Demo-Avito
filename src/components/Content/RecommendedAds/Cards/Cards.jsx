//library
import React from "react";
//components
import { Card } from "./Card";
import { cards } from "./mock";
//styles
import styles from "./cards.module.css";

export const Cards = () => {
  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

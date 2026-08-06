import React from "react";
import { Logo } from "./Logo/Logo";
import { SearchBar } from "./SearchBar/SearchBar";
import { Services } from "./Services/Services";
import styles from "./contents.module.css";

export const Contents = () => {
  return (
    <div>
      <div className={styles.container}>
        <Logo />
        <SearchBar />
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
};

import React from "react";
import { Logo } from "./Logo/Logo";
import { SearchBar } from "./SearchBar/SearchBar";
import { Services } from "./Services/Services";
import { RecommendedAds } from "./RecommendedAds/RecommendedAds";
import styles from "./content.module.css";

export const Content = () => {
  return (
    <div>
      <div className={styles.container}>
        <Logo />
        <SearchBar />
      </div>
      <div>
        <Services />
        <RecommendedAds />
      </div>
    </div>
  );
};

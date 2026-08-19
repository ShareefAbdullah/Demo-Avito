//library
import React from "react";
import { Outlet } from "react-router-dom";
//components
import { Header } from "../Header/Header";
import { Logo } from "../Content/Logo/Logo";
import { SearchBar } from "../Content/SearchBar/SearchBar";
import { Footer } from "../Footer/Footer";
//styles
import styles from "../../components/Content/content.module.css";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.hero_container}>
        <Logo />
        <SearchBar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

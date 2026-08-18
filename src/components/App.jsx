import React from "react";
import { Header } from "./Header/Header";
import { Logo } from "./Content/Logo/Logo";
import { SearchBar } from "./Content/SearchBar/SearchBar";
import { Content } from "./Content/Content";
import { OpenAdPage } from "../pages/OpenAdPage";
import styles from "./Content/content.module.css";
import { MessagesPage } from "../pages/MessagesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.hero_container}>
        <Logo />
        <SearchBar />
      </div>
      <div className="container">
        {/*<Content />*/}
        {/*<OpenAdPage />*/}
        <MessagesPage />
      </div>
    </div>
  );
}

export default App;

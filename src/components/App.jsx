import React from "react";
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import { OpenAd } from "../pages/OpenAd";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Content />
        <OpenAd />
      </div>
    </div>
  );
}

export default App;

//library
import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import { Content } from "./Content/Content";
import { OpenAdPage } from "../pages/OpenAdPage";
import { MessagesPage } from "../pages/MessagesPage";
import { Layout } from "./Layout/Layout";
//styles
import styles from "./Content/content.module.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Content />} />

        <Route
          path="open-ad"
          element={
            <div className="container">
              <OpenAdPage />
            </div>
          }
        />
        <Route
          path="messages"
          element={
            <div className="container">
              <MessagesPage />
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

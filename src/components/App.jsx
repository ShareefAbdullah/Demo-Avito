//library
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//store
import { useDispatch } from "react-redux";
//components
import { Content } from "./Content/Content";
import { OpenAdPage } from "../pages/OpenAdPage";
import { MessagesPage } from "../pages/MessagesPage";
import { Layout } from "./Layout/Layout";
import { NewAd } from "../pages/NewAd";
import { MyAds } from "../pages/MyAds";
//styles
import styles from "./Content/content.module.css";
import { loadHomeAds } from "../redux/homeAdsReducer/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHomeAds());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Content />} />

        <Route
          path="/open-ad"
          element={
            <div className="container">
              <OpenAdPage />
            </div>
          }
        />
        <Route
          path="/messages"
          element={
            <div className="container">
              <MessagesPage />
            </div>
          }
        />
        <Route path="/new-ad" element={<NewAd />} />
        <Route path="/my-ads" element={<MyAds />} />
      </Route>
    </Routes>
  );
}

export default App;

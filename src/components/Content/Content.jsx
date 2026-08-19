//library
import React from "react";
//components
import { Services } from "./Services/Services";
import { RecommendedAds } from "./RecommendedAds/RecommendedAds";

export const Content = () => {
  return (
    <div>
      <Services />
      <RecommendedAds />
    </div>
  );
};

import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TitleAndPrice } from "../components/TitleAndPrice";
import { OpenAdButtons } from "../components/OpenAdButtons/OpenAdButtons";
import { Slider } from "../components/Slider/Slider";
import { Button } from "../components/Button/Button";
import { HousingInfo } from "../components/HousingInfo/HousingInfo";
import { Location } from "../components/Location";
import { Description } from "../components/Description/Description";
import { AboutBuilding } from "../components/AboutBuilding/AboutBuilding";
import { Footer } from "../components/Footer/Footer";

export const OpenAd = () => {
  return (
    <div>
      <Breadcrumbs />
      <TitleAndPrice />
      <OpenAdButtons />
      <div className="sliders_and_buttons">
        <div className="sliders_left">
          <Slider />
        </div>
        <div className="buttons_right">
          <Button
            text="8 938 173 03 50"
            color="white"
            font="24px"
            padding="15px"
            width="300px"
          />
          <Button
            text="Написать сообщение"
            color="white"
            font="24px"
            padding="15px"
            width="300px"
          />
        </div>
      </div>
      <HousingInfo />
      <Location />
      <Description />
      <AboutBuilding />
      <Footer />
    </div>
  );
};

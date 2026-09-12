//library
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
//store
import { useSelector } from "react-redux";
//components
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TitleAndPrice } from "../components/TitleAndPrice";
import { OpenAdButtons } from "../components/OpenAdButtons/OpenAdButtons";
import { Slider } from "../components/Slider/Slider";
import { Button } from "../components/Button/Button";
import { Location } from "../components/Location";
import { Description } from "../components/Description/Description";

export const OpenAdPage = () => {
  const id = parseInt(useParams().id);
  console.log(id);

  const largeImage = useSelector((state) => state.openAd.largeImage);
  const address = useSelector((state) => state.openAd.address);
  const phone = useSelector((state) => state.openAd.phone);
  const description = useSelector((state) => state.openAd.description);
  const title = useSelector((state) => state.openAd.title);
  const filteredLargeImage = largeImage.filter((el) => el.id === id);
  const filteredAddress = address.filter((el) => el.id === id);
  const filteredPhone = phone.filter((el) => el.id === id);
  const filteredDescription = description.filter(
    (el) => el.advertisementId === id
  );
  const filteredtitle = title.filter((el) => el.id === id);

  return (
    <div>
      <Breadcrumbs />
      {filteredtitle.map((item) => (
        <TitleAndPrice key={item.id} item={item} />
      ))}
      <OpenAdButtons />
      <div className="sliders_and_buttons">
        <div className="sliders_left">
          {filteredLargeImage.map((item) => (
            <Slider key={item.id} item={item} />
          ))}
        </div>
        <div className="buttons_right">
          {filteredPhone.map((item) => (
            <Button
              key={item.id}
              text={item.phone}
              color="white"
              font="24px"
              padding="15px"
              width="300px"
            />
          ))}
          <Button
            text="Написать сообщение"
            color="white"
            font="24px"
            padding="15px"
            width="300px"
          />
        </div>
      </div>
      {filteredAddress.map((item) => (
        <Location key={item.id} item={item} />
      ))}
      {filteredDescription.map((item) => (
        <Description key={item.advertisementId} item={item} />
      ))}
    </div>
  );
};

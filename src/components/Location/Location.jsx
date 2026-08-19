//library
import React from "react";
import Iframe from "react-iframe";

export const Location = () => {
  return (
    <div className="location_container">
      <h2>Расположение</h2>
      <p>Чеченская Республика, Грозный, ул. Шейха Али Митаева, 9/1</p>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2820.0042226744504!2d45.69478177586455!3d43.32185796045594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2snl!4v1786626795776!5m2!1sru!2snl"
        allowfullscreen=""
        loading="lazy"
        width="600"
        height="400"
      />
    </div>
  );
};

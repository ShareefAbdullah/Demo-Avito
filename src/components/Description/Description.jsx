//library
import React from "react";

export const Description = ({ item }) => {
  return (
    <div className="description_container">
      <h2>Описание</h2>
      <p>{item.description}</p>
    </div>
  );
};

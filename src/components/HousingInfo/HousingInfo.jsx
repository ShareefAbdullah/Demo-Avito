import React from "react";

export const HousingInfo = () => {
  return (
    <div>
      <h2>Информация по квартире</h2>
      <div className="housing_container">
        <div className="housing_left">
          <p>
            <span>Количество комнат:</span> 2
          </p>
          <p>
            <span>Общая площадь:</span> 67.8 м²
          </p>
          <p>
            <span>Площадь кухни:</span> 15.5 м²
          </p>
          <p>
            <span>Жилая площадь:</span> 27 м²
          </p>
          <p>
            <span>Этаж:</span> 7 из 22
          </p>
        </div>
        <div className="housing_right">
          <p>
            <span>Балкон или лоджия:</span> балкон, лоджия
          </p>
          <p>
            <span>Тип комнат:</span> Изолированные
          </p>
          <p>
            <span>Ремонт:</span> Требует ремонта
          </p>
          <p>
            <span>Способ продажи:</span> Свободная
          </p>
        </div>
      </div>
    </div>
  );
};

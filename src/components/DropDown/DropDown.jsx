//library
import React from "react";
//styles
import styled from "styled-components";

const DropDownWrapper = styled.div`
  width: 230px;
  background-color: #d8d8d8;
  padding: 10px;
  border-radius: 10px;

  & > ul {
    list-style: none;
    padding-left: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
  }

  & > ul:last-child {
    border: none;
    padding-bottom: 0;
  }

  & > ul > li {
    color: #0382f7;
    padding: 5px;
    margin-bottom: 10px;
  }

  & > ul > li:hover {
    background-color: #011765;
    color: white;
    width: 190px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
  }
`;

export const DropDown = () => {
  return (
    <DropDownWrapper>
      <ul>
        <li>Мои объявления</li>
        <li>Заказы</li>
        <li>Мои отзывы</li>
        <li>Избранное</li>
      </ul>
      <ul>
        <li>Сообщения</li>
        <li>Уведомления</li>
      </ul>
      <ul>
        <li>Кошелек</li>
        <li>Платные услуги</li>
        <li>Спецпредложения</li>
      </ul>
      <ul>
        <li>Управление профилем</li>
        <li>Защита профиля</li>
        <li>Настройки</li>
        <li>Lincode-Avito доставка</li>
      </ul>
    </DropDownWrapper>
  );
};

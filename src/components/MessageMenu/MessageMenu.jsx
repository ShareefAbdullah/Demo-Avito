//library
import React from "react";
//components
import { MessageMenuLogo } from "./MessageMenuLogo";
import { MessageMenuTitle } from "./MessageMenuTitle";
import { MessageMenuRating } from "./MessageMenuRating";
//styles
import styles from "../../pages/messages.module.css";

export const MessageMenu = () => {
  return (
    <div className={styles.message_menu}>
      <MessageMenuLogo />
      <MessageMenuTitle />
      <MessageMenuRating />
      <hr />
      <ul>
        <li>Мои объявления</li>
        <li>Заказы</li>
        <li>Мои отзывы</li>
        <li>Избранное</li>
        <li>Резюме</li>
      </ul>
      <hr />
      <ul>
        <li className={styles.message_menu_active}>Сообщения</li>
        <li>Уведомления</li>
      </ul>
      <hr />
      <ul>
        <li>Кошелек</li>
        <li>Платные услуги</li>
        <li>Для профессионалов</li>
        <li>Спецпредложения</li>
      </ul>
      <hr />
      <ul>
        <li>Управление профилем</li>
        <li>Защита профиля</li>
        <li>Настройки</li>
        <li>Lincode-Авито доставка</li>
      </ul>
    </div>
  );
};

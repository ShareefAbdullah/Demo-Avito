//library
import React, { useState } from "react";
import { Link } from "react-router-dom";
//components
import heart from "../../assets/headerHeart.svg";
import message from "../../assets/headerMessage.svg";
import avatar from "../../assets/headerAvatar.svg";
import { Button } from "../Button/Button";
import { DropDown } from "../DropDown/DropDown";
//hooks
import { useOutsideAlerter } from "../hook/UseOutsideAlerter";
//styles
import styles from "./header.module.css";

export const Navigation = () => {
  const { ref, isShown, setIsShown } = useOutsideAlerter(false);

  return (
    <div className={styles.navigation}>
      <div className={styles.heart}>
        <img src={heart} alt="heart" />
      </div>
      <div className={styles.message}>
        <Link to="/messages">
          <img src={message} alt="message" />
        </Link>
      </div>
      <div className={styles.my_ads}>
        <Link to="/my-ads">Мои объявления</Link>
      </div>
      <div
        className={styles.avatar}
        ref={ref}
        onClick={() => setIsShown((prev) => !prev)}
      >
        <img src={avatar} alt="avatar" />
        <p>Lincode</p>
        {isShown && (
          <div className={styles.absolute} onClick={(e) => e.stopPropagation()}>
            <DropDown />
          </div>
        )}
      </div>
      <Link to="/new-ad">
        <Button text="Разместить объявление" color="white" width="200px" />
      </Link>
    </div>
  );
};

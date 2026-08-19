//library
import React from "react";
import { Link } from "react-router-dom";
//components
import logo from "../../../assets/ComponentLogo.svg";

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

import React from "react";
import logoImg from "../../img/logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logoImg} alt="Логотип" />
    </div>
  );
}

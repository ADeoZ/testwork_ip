import { useState } from "react";
import "./Currencies.css";
import CurrencyButton from "./CurrencyButton";

const currienciesValues = ["RUB", "USD", "EUR"];

export default function Currencies() {

  const [current, setCurrent] = useState("RUB");

  const handlerClick = (currency: any) => {
    setCurrent(currency);
  }

  return (
    <div className="currencies">
      <div className="currencies__header">Валюта</div>
      <div className="currencies__controls">
        {currienciesValues.map((currency, key) =>
          <CurrencyButton value={currency} handler={handlerClick} checked={currency === current} key={key} />
        )}
      </div>
    </div>
  );
}

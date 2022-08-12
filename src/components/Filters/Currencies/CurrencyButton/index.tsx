import "./CurrencyButton.css";
import { useContext } from "react";
import { CurrencyContext } from "../../../../App";

interface CurrencyButtonProps {
  value: string
}

export default function CurrencyButton({ value }: CurrencyButtonProps) {
  const currencyContext = useContext(CurrencyContext);

  const handlerClick = (currency: string) => {
    currencyContext.setCurrent(currency);
  }

  return <button
  className={"currencies__button" + (value === currencyContext.current ? " currencies__button_checked" : "")}
  onClick={() => handlerClick(value)}>
    {value}
  </button>;
}

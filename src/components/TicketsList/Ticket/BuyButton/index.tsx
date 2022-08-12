import { useContext } from "react";
import { CurrencyContext } from "../../../../App";
import "./BuyButton.css";

export default function BuyButton({ price }: any) {
  const currencyNames: any = {
    "RUB": "₽",
    "EUR": "€",
    "USD": "$",
  }

  const currencyContext = useContext(CurrencyContext);
  const priceFormatted = Math.ceil(price * currencyContext.exchange[currencyContext.current]).toLocaleString();

  return <button className="ticket__buy">Купить<span>за {priceFormatted} {currencyNames[currencyContext.current]}</span></button>;
}

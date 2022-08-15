import React from "react";
import { useContext } from "react";
import { TicketPriceInterface } from "../..";
import { CurrencyContext, CurrencyContextInterface } from "../../../../App";
import "./BuyButton.css";

enum CurrencyNames {
  RUB = "₽",
  EUR = "€",
  USD = "$",
}

export default function BuyButton({ price }: TicketPriceInterface) {
  const currencyContext = useContext(CurrencyContext) as CurrencyContextInterface;
  const priceFormatted = Math.ceil(
    price * currencyContext.exchange[currencyContext.current]
  ).toLocaleString();

  return (
    <button className="ticket__buy">
      Купить
      <span>
        за {priceFormatted} {CurrencyNames[currencyContext.current as keyof typeof CurrencyNames]}
      </span>
    </button>
  );
}

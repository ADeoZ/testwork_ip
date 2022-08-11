import "./BuyButton.css";

export default function BuyButton({price, currency}: any) {
  const currencyNames: any = {
    "RUB": "₽",
    "EUR": "€",
    "USD": "$",
  }

  return <button className="ticket__buy">Купить<span>за {price.toLocaleString()} {currencyNames[currency]}</span></button>;
}

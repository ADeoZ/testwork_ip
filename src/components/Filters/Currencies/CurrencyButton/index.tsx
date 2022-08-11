import "./CurrencyButton.css";

export default function CurrencyButton({ value, handler, checked }: any) {
  return <button className={"currencies__button" + (checked ? " currencies__button_checked" : "")} onClick={() => handler(value)}>{value}</button>;
}

import "./Currencies.css";
import CurrencyButton from "./CurrencyButton";

export default function Currencies() {
  return (
    <div className="currencies">
      <div className="currencies__header">Валюта</div>
      <div className="currencies__controls">
        <CurrencyButton />
        <CurrencyButton />
        <CurrencyButton />
      </div>
    </div>
  );
}

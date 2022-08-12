import "./Currencies.css";
import CurrencyButton from "./CurrencyButton";

const currienciesValues = ["RUB", "USD", "EUR"];

export default function Currencies() {

  return (
    <div className="currencies">
      <div className="currencies__header">Валюта</div>
      <div className="currencies__controls">
        {currienciesValues.map((currency, key) =>
          <CurrencyButton value={currency} key={key} />
        )}
      </div>
    </div>
  );
}

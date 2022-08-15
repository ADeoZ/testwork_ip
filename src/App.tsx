import "./App.css";
import React, { createContext, useState } from "react";
import Filter from "./components/Filters";
import Logo from "./components/Logo";
import TicketsList, { TicketsInterface } from "./components/TicketsList";
import TicketsData from "./json/tickets.json";

export interface CurrencyContextInterface {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  exchange: {
    [index: string]: number;
  };
}

export interface StopsContextInterface {
  stopsFilter: number[];
  setStopsFilter: React.Dispatch<React.SetStateAction<number[]>>;
}

export const CurrencyContext = createContext<CurrencyContextInterface | null>(null);
export const StopsContext = createContext<StopsContextInterface | null>(null);

function App() {
  // Состояние и контекст для валюты
  const [currentCurrency, setCurrentCurrency] = useState<string>("RUB");
  const currencyContextInitialValue = {
    current: currentCurrency,
    setCurrent: setCurrentCurrency,
    exchange: {
      RUB: 1,
      USD: 1 / 60.62,
      EUR: 1 / 62.52,
    },
  };

  // Состояние и контекст для пересадок
  const [stopsFilter, setStopsFilter] = useState<number[]>([0, 1, 2, 3]);
  const stopsContextValue = {
    stopsFilter,
    setStopsFilter,
  };

  // Фильтрация
  const tickets: TicketsInterface[] = TicketsData.tickets.filter((ticket) =>
    stopsFilter.includes(ticket.stops)
  );

  return (
    <>
      <Logo />
      <div className="wrapper">
        <CurrencyContext.Provider value={currencyContextInitialValue}>
          <StopsContext.Provider value={stopsContextValue}>
            <Filter />
          </StopsContext.Provider>

          <TicketsList tickets={tickets} />
        </CurrencyContext.Provider>
      </div>
    </>
  );
}

export default App;

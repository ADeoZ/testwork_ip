import React from "react";
import "./Place.css";

interface PlacePropsInterface {
  airport: string;
  city: string;
  date: string;
  time: string;
}

export default function Place({ airport, city, date, time }: PlacePropsInterface) {
  const weekdaysNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const monthsNames = [
    "янв",
    "фев",
    "март",
    "апр",
    "май",
    "июнь",
    "июль",
    "авг",
    "сент",
    "окт",
    "нояб",
    "дек",
  ];

  const dateObj = new Date(date.replace(/(\d{2})\.(\d{2})\.(\d{2})/, "$2/$1/20$3"));
  const formattedDate = `${dateObj.getDate()} ${monthsNames[dateObj.getMonth()]} ${dateObj.getFullYear()}, ${
    weekdaysNames[dateObj.getDay()]
  }`;

  return (
    <div className="ticket__place">
      <div className="ticket__time">{time}</div>
      <div className="ticket__city">
        {airport}, {city}
      </div>
      <div className="ticket__date">{formattedDate}</div>
    </div>
  );
}

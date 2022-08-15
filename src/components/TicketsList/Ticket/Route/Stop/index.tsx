import React from "react";
import { TravelStopsInterface } from "../../..";
import "./Stop.css";

export default function Stop({ stops }: TravelStopsInterface) {
  // окончания исчисляемых существительных
  function сountableEndings(numeral: number, endings: string[]): string {
    let ending = "";
    const div = (Math.abs(numeral) % 100) % 10;
    if (numeral > 10 && numeral < 20) {
      ending = endings[0];
    } else if (div > 1 && div < 5) {
      ending = endings[1];
    } else if (div === 1) {
      ending = endings[2];
    } else {
      ending = endings[0];
    }

    return ending;
  }

  const stopWord = сountableEndings(stops, ["пересадок", "пересадки", "пересадка"]);

  return <div className="ticket__stop">{stops ? `${stops} ${stopWord}` : "Без пересадок"}</div>;
}

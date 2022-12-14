import React from "react";
import { AviaCarrierInterface } from "../..";
import "./AviaLogo.css";

interface AviaCarriersInterface {
  [name: string]: string;
}

export default function AviaLogo({ carrier }: AviaCarrierInterface) {
  const aviaNames: AviaCarriersInterface = {
    TK: "Turkish Airlines",
    S7: "S7 Airlines",
    SU: "Аэрофлот",
    BA: "British Airways",
  };

  return (
    <div className="ticket__logo">
      <div className="ticket__logo__img">
        <img src={`https://mpics.avs.io/al_square/64/64/${carrier}.png`} alt={aviaNames[carrier]} />
      </div>
      {aviaNames[carrier]}
    </div>
  );
}

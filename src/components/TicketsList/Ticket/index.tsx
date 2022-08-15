import React from "react";
import "./Ticket.css";
import AviaLogo from "./AviaLogo";
import BuyButton from "./BuyButton";
import Route from "./Route";
import { TicketsInterface } from "..";

interface TicketProps {
  info: TicketsInterface;
}

export default function Ticket({ info }: TicketProps) {
  return (
    <div className="ticket">
      <div className="ticket__left">
        <AviaLogo carrier={info.carrier} />
        <BuyButton price={info.price} />
      </div>
      <div className="ticket__right">
        <Route
          origin={info.origin}
          origin_name={info.origin_name}
          destination={info.destination}
          destination_name={info.destination_name}
          departure_date={info.departure_date}
          departure_time={info.departure_time}
          arrival_date={info.arrival_date}
          arrival_time={info.arrival_time}
          stops={info.stops}
        />
      </div>
    </div>
  );
}

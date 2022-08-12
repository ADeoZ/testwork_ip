import React from "react";
import "./TicketsList.css";
import Ticket from "./Ticket";

export interface TicketsInterface {
  origin: string,
  origin_name: string,
  destination: string,
  destination_name: string,
  departure_date: string,
  departure_time: string,
  arrival_date: string,
  arrival_time: string,
  carrier: string,
  stops: number,
  price: number,
}

interface TicketsListProps {
  tickets: TicketsInterface[],
}

export default function TicketsList({ tickets }: TicketsListProps) {
  return (
    <div className="tickets-list">
      {tickets.length ?
        tickets.map((ticket: TicketsInterface, key: number) =>
          <Ticket info={ticket} key={key} />
        ) :
        <div className="tickets-list__no-tickets">Билетов нет</div>}
    </div>
  );
}

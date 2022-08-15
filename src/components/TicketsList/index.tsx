import React from "react";
import "./TicketsList.css";
import Ticket from "./Ticket";

export interface OriginRouteInterface {
  origin: string;
  origin_name: string;
  departure_date: string;
  departure_time: string;
}

export interface DestinationRouteInterface {
  destination: string;
  destination_name: string;
  arrival_date: string;
  arrival_time: string;
}

export interface AviaCarrierInterface {
  carrier: string;
}

export interface TicketPriceInterface {
  price: number;
}

export interface TravelStopsInterface {
  stops: number;
}

export interface TicketsInterface
  extends OriginRouteInterface,
    DestinationRouteInterface,
    AviaCarrierInterface,
    TravelStopsInterface,
    TicketPriceInterface {}

interface TicketsListProps {
  tickets: TicketsInterface[];
}

export default function TicketsList({ tickets }: TicketsListProps) {
  return (
    <div className="tickets-list">
      {tickets.length ? (
        tickets.map((ticket: TicketsInterface, key: number) => <Ticket info={ticket} key={key} />)
      ) : (
        <div className="tickets-list__no-tickets">Билетов нет</div>
      )}
    </div>
  );
}

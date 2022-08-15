import React from "react";
import "./Route.css";
import Place from "./Place";
import Stop from "./Stop";
import { DestinationRouteInterface, OriginRouteInterface, TravelStopsInterface } from "../..";

interface RouteProps extends OriginRouteInterface, DestinationRouteInterface, TravelStopsInterface {}

export default function Route({
  origin,
  origin_name: originName,
  destination,
  destination_name: destinationName,
  departure_date: departureDate,
  departure_time: departureTime,
  arrival_date: arrivalDate,
  arrival_time: arrivalTime,
  stops,
}: RouteProps) {
  return (
    <div className="ticket__route">
      <Place airport={origin} city={originName} date={departureDate} time={departureTime} />
      <Stop stops={stops} />
      <Place airport={destination} city={destinationName} date={arrivalDate} time={arrivalTime} />
    </div>
  );
}

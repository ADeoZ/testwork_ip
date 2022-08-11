import "./Route.css";
import Place from "./Place";
import Stop from "./Stop";

export default function Route({ origin, originName, destination, destinationName, departureDate, departureTime, arrivalDate, arrivalTime, stops }: any) {
  return (
    <div className="ticket__route">
      <Place airport={origin} city={originName} date={departureDate} time={departureTime} />
      <Stop stops={stops} />
      <Place airport={destination} city={destinationName} date={arrivalDate} time={arrivalTime} />
    </div>
  );
}
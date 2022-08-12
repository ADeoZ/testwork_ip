import "./Ticket.css";
import AviaLogo from "./AviaLogo";
import BuyButton from "./BuyButton";
import Route from "./Route";

export default function Ticket({ info }: any) {
  return (
    <div className="ticket">
      <div className="ticket__left">
        <AviaLogo carrier={info.carrier} />
        <BuyButton price={info.price} />
      </div>
      <div className="ticket__right">
        <Route
          origin={info.origin}
          originName={info.origin_name}
          destination={info.destination}
          destinationName={info.destination_name}
          departureDate={info.departure_date}
          departureTime={info.departure_time}
          arrivalDate={info.arrival_date}
          arrivalTime={info.arrival_time}
          stops={info.stops}
        />
      </div>
    </div>
  );
}

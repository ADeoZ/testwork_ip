import "./Ticket.css";
import AviaLogo from "./AviaLogo";
import BuyButton from "./BuyButton";
import Route from "./Route";

export default function Ticket() {
  return (
    <div className="ticket">
      <div className="ticket__left">
        <AviaLogo />
        <BuyButton />
      </div>
      <div className="ticket__right">
        <Route />
      </div>
    </div>
  );
}

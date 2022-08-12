import "./TicketsList.css";
import Ticket from "./Ticket";

export default function TicketsList({ tickets }: any) {
  return (
    <div className="tickets-list">
      {tickets.length ?
        tickets.map((ticket: any, key: number) =>
          <Ticket info={ticket} key={key} />
        ) :
        <div className="tickets-list__no-tickets">Билетов нет</div>}
    </div>
  );
}

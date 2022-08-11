import { useEffect } from "react";
import Ticket from "./Ticket";

export default function TicketsList({ tickets }: any) {
  useEffect(() => {
    console.log(tickets);
  }, [tickets]);


  return (
    <div className="tickets-list">
      {tickets.map((ticket: any, key: number) =>
        <Ticket info={ticket} key={key} />
      )}
    </div>
  );
}

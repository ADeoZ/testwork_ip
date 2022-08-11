import "./App.css";
import Filter from "./components/Filters";
import Logo from "./components/Logo";
import TicketsList from "./components/TicketsList";
import TicketsData from "./json/tickets.json";

function App() {

  return (
    <>
      <Logo />
      <div className="wrapper">
        <Filter />
        <TicketsList tickets={TicketsData.tickets}/>
      </div>
    </>
  );
}

export default App;

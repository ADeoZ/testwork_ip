import "./App.css";
import Filter from "./components/Filters";
import Logo from "./components/Logo";
import TicketsList from "./components/TicketsList";

function App() {
  return (
    <>
      <Logo />
      <div className="wrapper">
        <Filter />
        <TicketsList />
      </div>
    </>
  );
}

export default App;

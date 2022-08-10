import "./Filters.css";
import Currencies from "./Currencies";
import StopOptions from "./StopOptions";

export default function Filter() {
  return (
    <div className="filters">
      <Currencies />
      <StopOptions />
    </div>
  );
}

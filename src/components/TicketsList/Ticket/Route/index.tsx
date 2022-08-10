import Place from "./Place";
import Stop from "./Stop";

export default function Route() {
  return (
    <div className="ticket__route">
      <Place />
      <Stop />
      <Place />
    </div>
  );
}
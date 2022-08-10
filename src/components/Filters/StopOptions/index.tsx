import "./StopOptions.css";
import StopCheckbox from "./StopCheckbox";

export default function StopOptions() {
  return (
    <div className="stopoptions">
      <div className="stopoptions__header">Количество пересадок</div>
      <div className="stopoptions__wrapper">
        <StopCheckbox />
        <StopCheckbox />
        <StopCheckbox />
        <StopCheckbox />
        <StopCheckbox />
      </div>
    </div>
  );
}

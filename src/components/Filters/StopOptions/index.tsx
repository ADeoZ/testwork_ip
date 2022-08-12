import "./StopOptions.css";
import StopCheckbox from "./StopCheckbox";
import { useContext } from "react";
import { StopsContext } from "../../../App";

const stopValues: any = { "Без пересадок": 0, "1 пересадка": 1, "2 пересадки": 2, "3 пересадки": 3 };

export default function StopOptions() {
  const { stopsFilter, setStopsFilter } = useContext(StopsContext);

  const handlerChange = (stopKey: any) => {
    const stopValue = stopValues[stopKey];
    stopsFilter.includes(stopValue) ?
      setStopsFilter((prevValue: number[]) => prevValue.filter(value => value !== stopValue))
      :
      setStopsFilter((prevValue: number[]) => [...prevValue, stopValue]);
  }

  const checkAll = () => {
    stopsFilter.length === Object.keys(stopValues).length ?
      setStopsFilter([])
      :
      setStopsFilter(Object.values(stopValues));
  }

  return (
    <div className="stopoptions">
      <div className="stopoptions__header">Количество пересадок</div>
      <div className="stopoptions__wrapper">
        <StopCheckbox
          value="Все"
          handler={checkAll}
          checked={stopsFilter.length === Object.keys(stopValues).length}
        />
        {Object.keys(stopValues).map(
          (checkboxName) =>
            <StopCheckbox
              value={checkboxName}
              handler={handlerChange}
              checked={stopsFilter.includes(stopValues[checkboxName])}
              key={checkboxName}
            />)}
      </div>
    </div>
  );
}

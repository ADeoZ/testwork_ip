import "./StopOptions.css";
import StopCheckbox from "./StopCheckbox";
import { useState } from "react";

const stopValues: any = { "Без пересадок": 0, "1 пересадка": 1, "2 пересадки": 2, "3 пересадки": 3 };

export default function StopOptions() {
  const [checkedOptions, setCheckedOptions] = useState([0, 1, 2]);

  const handlerChange = (stopKey: any) => {
    const stopValue = stopValues[stopKey];
    checkedOptions.includes(stopValue) ?
      setCheckedOptions(prevValue => prevValue.filter(value => value !== stopValue))
      :
      setCheckedOptions(prevValue => [...prevValue, stopValue]);
  }

  const checkAll = () => {
    checkedOptions.length === Object.keys(stopValues).length ?
      setCheckedOptions([])
      :
      setCheckedOptions(Object.values(stopValues));
  }

  return (
    <div className="stopoptions">
      <div className="stopoptions__header">Количество пересадок</div>
      <div className="stopoptions__wrapper">
        <StopCheckbox value="Все" handler={checkAll} checked={checkedOptions.length === Object.keys(stopValues).length} />
        {Object.keys(stopValues).map((checkboxName) => <StopCheckbox value={checkboxName} handler={handlerChange} checked={checkedOptions.includes(stopValues[checkboxName])} key={checkboxName} />)}
      </div>
    </div>
  );
}

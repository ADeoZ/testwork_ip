import "./StopCheckbox.css";

export default function StopCheckbox({ value, handler, checked }: any) {
  return (
    <label className="stopcheck">
      <input type="checkbox" onChange={(event) => handler(value)} checked={checked}/>
      {value}
    </label>
  );
}

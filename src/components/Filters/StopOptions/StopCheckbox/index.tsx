import React from "react";
import "./StopCheckbox.css";

interface StopCheckboxProps {
  value: string;
  handler: (value: string) => void;
  checked: boolean;
}

export default function StopCheckbox({ value, handler, checked }: StopCheckboxProps) {
  return (
    <label className="stopcheck">
      <input type="checkbox" onChange={() => handler(value)} checked={checked} />
      {value}
    </label>
  );
}

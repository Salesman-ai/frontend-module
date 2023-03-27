import { useState } from "react";
const Year = (props) => {
  const [year, setYear] = useState("");
  const changeYear = (event) => {
    setYear(event.target.value);
    props.year(event.target.value);
  };
  return (
    <div>
      <label> Year</label>
      <input
        type="number"
        min="1900"
        max={new Date().getFullYear()}
        step="1"
        value={year}
        onChange={changeYear}
      ></input>
    </div>
  );
};
export default Year;

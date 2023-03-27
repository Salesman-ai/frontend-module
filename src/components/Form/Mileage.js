import { useState } from "react";
const Mileage = (props) => {
  const [mileage, setMileage] = useState("");
  const changeMileage = (event) => {
    setMileage(event.target.value);
    props.mileage(event.target.value);
  };
  return (
    <div>
      <label> Mileage</label>
      <input
        type="number"
        min="1"
        step="1"
        value={mileage}
        onChange={changeMileage}
      ></input>
    </div>
  );
};
export default Mileage;
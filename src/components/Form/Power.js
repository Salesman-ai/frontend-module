import { useState } from "react";
const Power = (props) => {
  const [power, setPower] = useState("");
  const changePower = (event) => {
    setPower(event.target.value);
    props.power(event.target.value);
  };
  return (
    <div>
      <label> Power</label>
      <input
        type="number"
        min="1"
        step="1"
        value={power}
        onChange={changePower}
      ></input>
    </div>
  );
};
export default Power;
import React, { useState } from "react";
const FuelType = (props) => {
  const fuelTypes = ["gasoline", "diesel", "electro"];
  const [fuelType, setFuelType] = useState("");
  const changeFuelType = (event) => {
    setFuelType(event.target.value);
    props.fuelType(event.target.value);
  };
  return (
    <div>
      <label>Fuel Type</label>
      <select value={fuelType} onChange={changeFuelType}>
        <option hidden value="Choose a fuel type">
          Choose a fuel type
        </option>
        {fuelTypes.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FuelType;

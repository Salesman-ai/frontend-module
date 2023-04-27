import data from "../../data/cars.json";
import React, { useState } from "react";
const Brand = (props) => {
  const [brand, setBrand] = useState("");

  const changeBrand = (event) => {
    setBrand(event.target.value);
    props.brand(event.target.value);
    let tekst = event.target.value;
    props.models(data[tekst]);
  };

  return (
      <div className="block top">
        <label>Brand</label>
        <select value={brand} onChange={changeBrand}>
          <option hidden value="choose a brand">
            Choose a brand
          </option>
          {Object.keys(data).map((car) => (
            <option value={car} key={car}>
              {car}
            </option>
          ))}
        </select>
      </div>

  );
};
export default Brand;

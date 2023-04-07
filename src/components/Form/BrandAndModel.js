import data from "../../data/cars.json";
import React, { useState } from "react";
const BrandAndModel = (props) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);

  const changeBrand = (event) => {
    setBrand(event.target.value);
    props.brand(event.target.value);
    let tekst = event.target.value;
    setModels(data[tekst]);
  };
  const changeModel = (event) => {
    setModel(event.target.value);
    props.model(event.target.value);
  };

  return (
    <div>
      <div>
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
      <div>
        <label>Model</label>
        <select value={model} onChange={changeModel}>
          <option hidden value="Choose a model">
            Choose a model
          </option>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default BrandAndModel;

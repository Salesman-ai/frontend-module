
import React, { useState } from "react";
const Model = (props) => {
  const [model, setModel] = useState("");
  const changeModel = (event) => {
    setModel(event.target.value);
    props.model(event.target.value);
  };

  return (
      <div className="block top">
        <label>Model</label>
        <select value={model} onChange={changeModel} disabled={props.models.length===0? true: false}>
          <option hidden value="Choose a model">
            
          </option>
          {props.models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>
  );
};
export default Model;

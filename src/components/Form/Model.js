
import React, { useState } from "react";
const Model = (props) => {
  const [model, setModel] = useState("");
//  const [models,setModels] = useState(props.models)
  const changeModel = (event) => {
    setModel(event.target.value);
    props.model(event.target.value);
  };

  return (
      <div className="block">
        <label>Model</label>
        <select value={model} onChange={changeModel}>
          <option hidden value="Choose a model">
            Choose a model
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

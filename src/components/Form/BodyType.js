import React, { useState } from "react";
const bodyTypes = [
  "coupe",
  "sedan",
  "minivan",
  "station wagon",
  "hatchback 3 doors",
  "hatchback 5 doors",
  "jeep 3 dors",
  "jeep 5 dors",
  "liftback",
  "open",
  "pickup",
];
const BodyType = (props) => {
  const [bodyType, setBodyType] = useState("");

  const changeBodyType = (event) => {
    setBodyType(event.target.value);
    props.bodyType(event.target.value);
  };
  return (
    <div>
      <label>Body Type</label>
      <select value={bodyType} onChange={changeBodyType}>
        <option hidden value="Choose a body type">
          Choose a body type
        </option>
        {bodyTypes.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
export default BodyType;

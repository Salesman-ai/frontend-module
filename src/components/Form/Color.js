import React, { useState } from "react";
const Clr = (props) => {
  const [color, setColor] = useState("");
  const colors = ["white", "grey", "black", "silver", "blue"];
  const changeColor = (event) => {
    setColor(event.target.value);
    props.color(event.target.value);
  };
  return (
    <div>
      <div>
        <label>Color</label>
        <select value={color} onChange={changeColor}>
          {color}
          <option hidden value="Choose a color">
            Choose a color
          </option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div className="color" style={{ backgroundColor: color }}></div>
    </div>
  );
};
export default Clr;

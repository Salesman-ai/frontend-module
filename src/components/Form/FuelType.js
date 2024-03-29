import data from "../../data/data.json"
const FuelType = (props) => {
  const changeFuelType = (event) => {
    props.fuelType(event.target.value);
  };
  return (
    <div className="block">
      <label>Fuel Type</label>
      <select value={props.value} onChange={changeFuelType}>
        <option hidden value="Choose a fuel type">
          
        </option>
        {data["fuelType"].map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FuelType;

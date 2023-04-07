import data from "../../data/data.json"
const BodyType = (props) => {
  const changeBodyType = (event) => {
    props.bodyType(event.target.value);
  };
  return (
    <div>
      <label>Body Type</label>
      <select value={props.value} onChange={changeBodyType}>
        <option hidden value="Choose a body type">
          Choose a body type
        </option>
        {data["bodyType"].map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
export default BodyType;

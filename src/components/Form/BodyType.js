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

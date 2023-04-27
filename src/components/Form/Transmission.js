import data from "../../data/data.json"
const Transmission = (props) => {
  const changeTransmission = (event) => {
    props.transmission(event.target.value);
  };
  return (
    <div className="block">
      <label>Transmission</label>
      <select value={props.value} onChange={changeTransmission}>
        <option hidden value="Choose a transmission">
        </option>
        {data['transmission'].map((transmission) => (
          <option key={transmission} value={transmission}>
            {transmission}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Transmission;

const Transmission = (props) => {
  const transmissions = ["AT", "CVT", "Automatic", "Manual", "Robot"];
  const changeTransmission = (event) => {
    props.transmission(event.target.value);
  };
  return (
    <div>
      <label>Transmission</label>
      <select value={props.value} onChange={changeTransmission}>
        <option hidden value="Choose a transmission">
          Choose a transmission
        </option>
        {transmissions.map((transmission) => (
          <option key={transmission} value={transmission}>
            {transmission}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Transmission;

const Mileage = (props) => {
  const changeMileage = (event) => {
    props.mileage(event.target.value);
  };
  return (
    <div className="block">
      <label> Mileage</label>
      <input
        type="number"
        min="1"
        step="1"
        value={props.value}
        onChange={changeMileage}
      ></input>
    </div>
  );
};
export default Mileage;

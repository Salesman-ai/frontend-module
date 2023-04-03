const Power = (props) => {
  const changePower = (event) => {
    props.power(event.target.value);
  };
  return (
    <div>
      <label> Power</label>
      <input
        type="number"
        min="1"
        step="1"
        value={props.value}
        onChange={changePower}
      ></input>
    </div>
  );
};
export default Power;

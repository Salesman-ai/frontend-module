const Year = (props) => {
  const changeYear = (event) => {
    props.year(event.target.value);
  };
  return (
    <div className="block">
      <label> Year</label>
      <input
        type="number"
        min="1900"
        max={new Date().getFullYear()}
        step="1"
        value={props.value}
        onChange={changeYear}
      ></input>
    </div>
  );
};
export default Year;

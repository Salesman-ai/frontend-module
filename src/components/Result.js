const Result = (props) => {
  return (
    <div className="center">
      {props.result !== "" ? (
        <p>Fill a form to get a price!</p>
      ) : (
        <p>Price of this car is</p>
      )}
      <p className="price">{props.result}</p>
    </div>
  );
};
export default Result;

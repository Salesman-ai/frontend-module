const Result = (props) => {
  console.log(props.result);
  return (
    <div className="center">
      {typeof props.result === "undefined" && (
        <p className="result">Fill a form to get a price!</p>
      )}
      {typeof props.result !== "undefined" && (
        <p className="result filled"> Price of your car is </p>
      )}
      <p className="price">{props.result}</p>
    </div>
  );
};
export default Result;

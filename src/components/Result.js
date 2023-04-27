const Result = (props) => {
  return (
    <div className="center">
      <p>Fill a form to get a price!</p>
      <p className="price">{props.result}</p>
    </div>
  );
};
export default Result;

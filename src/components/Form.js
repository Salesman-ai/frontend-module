import Brand from "./Form/Brand";
import BodyType from "./Form/BodyType";
import FuelType from "./Form/FuelType";
import Transmission from "./Form/Transmission";
import Mileage from "./Form/Mileage";
import Power from "./Form/Power";
import Year from "./Form/Year";
import Model from "./Form/Model";
import EngineDisplacement from "./Form/EngineDisplacement";
import { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [mileage, setMileage] = useState("");
  const [power, setPower] = useState("");
  const [transmission, setTransmission] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [models, setModels] = useState([]);
  const getBrand = (data) => {
    setBrand(data);
  };
  const getModels = (data) => {
    setModels(data);
  };
  const getModel = (data) => {
    setModel(data);
  };
  const getBodyType = (data) => {
    setBodyType(data);
  };
  const getFuelType = (data) => {
    setFuelType(data);
  };
  const getMileage = (data) => {
    setMileage(data);
  };
  const getPower = (data) => {
    setPower(data);
  };
  const getTransmission = (data) => {
    setTransmission(data);
  };
  const getYear = (data) => {
    setYear(data);
  };
  const getEngine = (data) => {
    setEngine(data);
  };
  const checkFilledInputs = () => {
    return (
      brand !== "" &&
      bodyType !== "" &&
      model !== "" &&
      fuelType !== "" &&
      mileage !== "" &&
      power !== "" &&
      transmission !== "" &&
      year !== "" &&
      engine !== ""
    );
  };
  const sendForm = (event) => {
    event.preventDefault();
    const car = {
      mileage: mileage,
      year: year,
      bodyType: bodyType,
      fuelType: fuelType,
      brand: brand,
      name: model,
      tranny: transmission,
      engineDisplacement: engine,
      power: power,
    };
    sendRequest(car);
  };
  async function sendRequest(car) {
    axios
      .post("http://192.166.217.30:8080/api-backend/get-price", car)
      .then((response) => props.result(response.data))
      .catch((error) => console.log(error));
  }
  return (
    <div className="left">
      <form onSubmit={sendForm} className="form">
        <Brand brand={getBrand} models={getModels} />
        <Model model={getModel} models={models} />
        <BodyType bodyType={getBodyType} value={bodyType} />
        <FuelType fuelType={getFuelType} value={fuelType} />
        <Transmission transmission={getTransmission} value={transmission} />
        <Mileage mileage={getMileage} value={mileage} />
        <Power power={getPower} value={power} />
        <Year year={getYear} value={year} />
        <EngineDisplacement engine={getEngine} value={engine} />
        <button
          type="submit"
          className="button"
          disabled={!checkFilledInputs()}
        >
          Check Price!
        </button>
      </form>
    </div>
  );
};
export default Form;

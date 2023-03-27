import BrandAndModel from "./BrandAndModel";
import BodyType from "./BodyType";
import Clr from "./Color";
import FuelType from "./FuelType";
import Transmission from "./Transmission";
import Mileage from "./Mileage";
import Power from "./Power";
import Year from "./Year";
import { useState } from "react";
import axios from 'axios';


const Form = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [color, setColor] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [mileage, setMileage] = useState("");
  const [power, setPower] = useState("");
  const [transmission, setTransmission] = useState("");
  const [year, setYear] = useState("");
  const getBrand = (data) => {
    setBrand(data);
  };
  const getModel = (data) => {
    setModel(data);
  };
  const getBodyType = (data) => {
    setBodyType(data);
  };
  const getColor = (data) => {
    setColor(data);
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
  const sendForm = (event) => {
    event.preventDefault();
    const car = {
      brand: brand,
      name: model,
      bodyType: bodyType,
      color: color,
      fuelType: fuelType,
      year: year,
      mileage: mileage,
      transmission: transmission,
      power: power,
    };
    sendRequest(car);
  };
  async function sendRequest(car) {
    axios
      .post("http://192.168.58.4:8080/api/get-price", car)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  return (
    <form onSubmit={sendForm}>
      <BrandAndModel brand={getBrand} model={getModel} />
      <BodyType bodyType={getBodyType} />
      <Clr color={getColor} />
      <FuelType fuelType={getFuelType} />
      <Transmission transmission={getTransmission} />
      <Mileage mileage={getMileage} />
      <Power power={getPower} />
      <Year year={getYear} />
      <button type="submit">Check Price!</button>
    </form>
  );
};
export default Form;

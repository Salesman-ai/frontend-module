import { render, screen, fireEvent } from "@testing-library/react";
// import App from App
import Navbar from "./components/Navbar";
import BodyType from "./components/Form/BodyType";
import Brand from "./components/Form/Brand";
import EngineDisplacement from "./components/Form/EngineDisplacement";
import FuelType from "./components/Form/FuelType";
import Mileage from "./components/Form/Mileage";
import Model from "./components/Form/Model";
import Power from "./components/Form/Power";
import Transmission from "./components/Form/Transmission";
import Year from "./components/Form/Year";
import Result from "./components/Result";

describe("Component", () => {
  test("Navbar renders good ", () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/SALES/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("BodyType renders good ", () => {
    render(<BodyType />);
    const label = screen.getByText("Body Type");
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
  test("Brand renders good ", () => {
    render(<Brand />);
    const label = screen.getByText(/Brand/i);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
  test("EngineDisplacement renders good ", () => {
    render(<EngineDisplacement />);
    const label = screen.getByText(/Engine/i);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
  test("FuelType renders good ", () => {
    render(<FuelType />);
    const label = screen.getByText(/Fuel/i);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
  test("Mileage renders good ", () => {
    render(<Mileage />);
    const label = screen.getByText(/Mileage/i);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
  test("Model renders good ", () => {
    render(<Model models={["model"]} />);
    const label = screen.getAllByText(/Model/i);
    expect(label).not.toBeNull;
  });
  test("Power renders good ", () => {
    render(<Power />);
    const label = screen.getByText(/Power/i);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
  test("Transmission renders good ", () => {
    render(<Transmission />);
    const label = screen.getByText(/Transmission/i);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
  test("Year renders good ", () => {
    render(<Year />);
    const label = screen.getByText(/Year/i);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
describe("Select", () => {
  test("BodyType works good", () => {
    const mock = jest.fn();
    render(<BodyType bodyType={mock} />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "open" } });
    expect(screen.getByDisplayValue("open")).toBeInTheDocument();
  });
  test("Brand works good", () => {
    const mock = jest.fn();
    render(<Brand brand={mock} models={mock} />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "Toyota" } });
    expect(screen.getByDisplayValue("Toyota")).toBeInTheDocument();
  });
  test("EngineDisplacement works good", () => {
    const mock = jest.fn();
    render(<EngineDisplacement engine={mock} />);
    const selectElement = screen.getByRole("spinbutton");
    fireEvent.change(selectElement, { target: { value: "1.2" } });
    expect(screen.getByDisplayValue("1.2")).toBeInTheDocument();
  });
  test("FuelType works good", () => {
    const mock = jest.fn();
    render(<FuelType fuelType={mock} />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "gasoline" } });
    expect(screen.getByDisplayValue("gasoline")).toBeInTheDocument();
  });
  test("Mileage works good", () => {
    const mock = jest.fn();
    render(<Mileage mileage={mock} />);
    const selectElement = screen.getByRole("spinbutton");
    fireEvent.change(selectElement, { target: { value: "200" } });
    expect(screen.getByDisplayValue("200")).toBeInTheDocument();
  });
  test("Model works good", () => {
    const mock = jest.fn();
    render(<Model model={mock} models={["test"]} />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "test" } });
    expect(screen.getByDisplayValue("test")).toBeInTheDocument();
  });
  test("Power works good", () => {
    const mock = jest.fn();
    render(<Power power={mock} />);
    const selectElement = screen.getByRole("spinbutton");
    fireEvent.change(selectElement, { target: { value: "8" } });
    expect(screen.getByDisplayValue("8")).toBeInTheDocument();
  });
  test("Transmission works good", () => {
    const mock = jest.fn();
    render(<Transmission transmission={mock} />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "Manual" } });
    expect(screen.getByDisplayValue("Manual")).toBeInTheDocument();
  });
  test("Year works good", () => {
    const mock = jest.fn();
    render(<Year year={mock} />);
    const selectElement = screen.getByRole("spinbutton");
    fireEvent.change(selectElement, { target: { value: "2010" } });
    expect(screen.getByDisplayValue("2010")).toBeInTheDocument();
  });
});
describe("others", () => {
  test("Empty result looks good", () => {
    render(<Result />);
    const value = screen.getByText("Fill a form to get a price!");
    expect(value).toBeInTheDocument();
  });
  test("Result with a price looks good", () => {
    render(<Result result={"100"} />);
    const value = screen.getByText("100");
    expect(value).toBeInTheDocument();
  });
});

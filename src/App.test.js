import { render, screen } from "@testing-library/react";
// import App from App
import Navbar from "./components/Navbar";

test("renders navigation bar with a title", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/SALES/i);
  expect(linkElement).toBeInTheDocument();
});

test("");

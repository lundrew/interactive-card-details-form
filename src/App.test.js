import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test("App renders without errors", () => {
  const app = render(<App />);
  expect(app).not.toThrowError;
});

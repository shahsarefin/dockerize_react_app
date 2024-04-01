import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders learn docker heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn docker/i); // Corrected text to match the component
  expect(headingElement).toBeInTheDocument();
});

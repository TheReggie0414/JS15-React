/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

test("Button cmp renders correctly", async () => {
  render(<Button />);
  // screen.debug();
  const element = await screen.getByText("Open");
  expect(element).toBeInTheDocument();
});

test("Button cmp changes text", async () => {
  render(<Button />);
  // screen.debug();
  const element = await screen.getByText("Open");
  fireEvent.click(element);
  expect(element).toHaveTextContent("Close");
});

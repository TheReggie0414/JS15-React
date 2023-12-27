/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Greetings } from "./greetings";

test("Greetings cmp renders correctly", async () => {
  render(<Greetings name="Taras" />);
  // screen.debug();
  const element = await screen.getByText("Hello Taras");
  expect(element).toBeInTheDocument();
});

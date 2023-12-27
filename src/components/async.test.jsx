/* eslint-disable no-undef */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Async } from "./async";

test("Async cmp renders correctly", async () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve({ username: "taras hates tests" }),
    });
  });

  render(<Async />);
  const element = await screen.getByText(/get/i);
  fireEvent.click(element);

  const userNameElem = await waitFor(() => screen.getByText(/hello/i));

  expect(userNameElem).toBeInTheDocument();
});

// class component
//

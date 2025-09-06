import { render, screen } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import RESTAURANT_MOCK from "../mocks/Restaurant.json";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MOCK);
    },
  });
});

it("should render the body component with Search button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const button = screen.getByRole("button", { name: "Search" });
  expect(button).toBeInTheDocument();
});

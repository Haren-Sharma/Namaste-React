import { fireEvent, render, screen } from "@testing-library/react";
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

it("should filter the cards based on search input as Pizza", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCards_before_search = screen.getAllByTestId("res_card")?.length;
  expect(resCards_before_search).toBe(8);

  const input_box = screen.getByTestId("res_input_box");
  fireEvent.change(input_box, { target: { value: "Pizza" } });
  const button = screen.getByRole("button", { name: "Search" });
  fireEvent.click(button);

  const resCards_after_search = screen.getAllByTestId("res_card")?.length;
  expect(resCards_after_search).toBe(1);
});

it("should filter the top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  expect(screen.getAllByTestId("res_card").length).toBe(8);
  const top_rated_btn = screen.getByRole("button", { name: "Top Rated" });
  fireEvent.click(top_rated_btn);
  expect(screen.getAllByTestId("res_card").length).toBe(1);
});

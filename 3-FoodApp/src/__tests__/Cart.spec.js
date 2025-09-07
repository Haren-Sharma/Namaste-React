import { fireEvent, screen, render, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import RESTAURANT_MOCK_DATA from "../mocks/Restaurant.json";
import { Provider } from "react-redux";
import Header from "../components/Header";
import store from "../redux/store/store";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MOCK_DATA);
    },
  });
});

it("should test the whole flow for cart component", async () => {
  //loading the Restaurant Menu Component

  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  // click on the Starters accordian

  const res_category_accordian = screen.getByText("Starters (4)");

  fireEvent.click(res_category_accordian);

  //click on add + for Garlic Breadsticks restaurant category item

  const parent = screen.getByText("Garlic Breadsticks").closest(".flex");
  const btn = within(parent).getByTestId("add_Button_div");

  fireEvent.click(btn);
  fireEvent.click(btn);
  fireEvent.click(btn);
  fireEvent.click(btn);

  //getting the cart items from header
  const cart = screen.getByRole("link", { name: "Cart - (4 Items)" });

  expect(cart).toBeInTheDocument();
});

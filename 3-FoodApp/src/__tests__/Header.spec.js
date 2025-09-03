import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Testing The Header Component", () => {
  it("should load the component with all the list items", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const list = screen.getAllByRole("listitem");

    expect(list.length).toBe(8);
  });

  it("should show the Cart Item", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });

  it("should show the Cart Items as 0", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByRole("link", { name: "Cart - (0 Items)" });

    expect(cartItems).toBeInTheDocument();
  });
});

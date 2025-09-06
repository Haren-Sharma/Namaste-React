import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import RES_CARD_MOCK_DATA from "../mocks/ResCardMock.json";

it("should render Restaurant Card Component with props data", () => {
  const mockHandleClick = jest.fn(() => {});

  render(
    <RestaurantCard data={RES_CARD_MOCK_DATA} handleClick={mockHandleClick} />
  );

  const element = screen.getByText("Pizza Hut");

  expect(element).toBeInTheDocument();
});

it("should trigger the handle click function passed a prop", () => {
  const mockHandleClick = jest.fn(() => {});

  render(
    <RestaurantCard data={RES_CARD_MOCK_DATA} handleClick={mockHandleClick} />
  );

  const card = screen.getByText("Pizza Hut");

  fireEvent.click(card);

  expect(mockHandleClick).toHaveBeenCalled();
});

import { render, screen, fireEvent } from "@testing-library/react";
import ResData from "../mocks/ResCardMock.json";
import RestaurantCard from "../components/RestaurantCard";
import "@testing-library/jest-dom"
import { IMG_URL } from "../utils/constants";

it("should render the restaurant card",()=>{
    render(<RestaurantCard data={ResData} handleClick={()=>{}}/>)

    const res_name=screen.getByText("Pizza Hut");

    expect(res_name).toBeInTheDocument();
})

it("should render locality and area name text",()=>{
    render(<RestaurantCard data={ResData} handleClick={()=>{}}/>)

    const locationText = `${ResData.locality}, ${ResData.areaName}`;
    expect(screen.getByText(locationText)).toBeInTheDocument();
})

it("should render cuisines text (first up to 3)",()=>{
    render(<RestaurantCard data={ResData} handleClick={()=>{}}/>)

    // Mock has only one cuisine
    expect(screen.getByText("Pizzas")).toBeInTheDocument();
})

it("should render average rating",()=>{
    render(<RestaurantCard data={ResData} handleClick={()=>{}}/>)

    expect(screen.getByText(String(ResData.avgRating))).toBeInTheDocument();
})

it("should render the image with correct src",()=>{
    render(<RestaurantCard data={ResData} handleClick={()=>{}}/>)

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", IMG_URL + ResData.cloudinaryImageId);
})

it("should call handleClick when card is clicked",()=>{
    const onClick = jest.fn();
    render(<RestaurantCard data={ResData} handleClick={onClick}/>)

    const card = screen.getByText("Pizza Hut").closest(".restaurant-card");
    // Fallback: click on the text if closest fails
    if (card) {
        fireEvent.click(card);
    } else {
        fireEvent.click(screen.getByText("Pizza Hut"));
    }
    expect(onClick).toHaveBeenCalledTimes(1);
})
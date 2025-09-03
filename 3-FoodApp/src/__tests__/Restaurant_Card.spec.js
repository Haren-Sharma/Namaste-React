import { render, screen } from "@testing-library/react";
import ResData from "../mocks/ResCardMock.json";
import RestaurantCard from "../components/RestaurantCard";
import "@testing-library/jest-dom"

it("should render the restaurant card",()=>{
    render(<RestaurantCard data={ResData} handleClick={()=>{}}/>)

    const res_name=screen.getByText("Pizza Hut");

    expect(res_name).toBeInTheDocument();
})
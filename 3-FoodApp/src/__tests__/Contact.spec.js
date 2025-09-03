import {render, screen} from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom" //to make toBeInTheDocument() function work

test("Should check whether the contact component is loaded or not",()=>{
    
    //rendering the component to JSDOM
    render(<Contact/>); 

    //Querying
    const heading=screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
})
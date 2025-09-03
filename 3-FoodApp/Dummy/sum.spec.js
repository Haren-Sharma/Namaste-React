import { sum } from "./sum"

test("Testing the sum function",()=>{
    const result=sum(2,3);
    expect(result).toBe(5); //Assertion
})

test("Failing the test case",()=>{
    const result=sum(1,2);
    expect(result).not.toBe(8);
})
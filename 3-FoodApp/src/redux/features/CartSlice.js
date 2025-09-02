import { createSlice, current } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // looks like mutation, but Immer makes it immutable
    },
    removeItem: (state, action) => {},
    clearCart: (state) => {
      console.log(state) // this will console a proxy object which we can't read
      console.log(current(state)) // this will console our state
      state.items.length = 0;
      /*
        why the above statement ?
        can't we write just state=[];
        Ans: No
        If we write state=[]
        This won't change the original state but just add a new reference to the 
        local variable state.That is why we need to mutate it.

        According to RTK either mutate the state or simply return a newState 

        So we can achieve the above thing by simply

        return {items:[]}
      */
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;

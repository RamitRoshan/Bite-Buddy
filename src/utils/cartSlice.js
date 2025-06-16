import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        //cart items and initially I am giving it as empty array
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here
            //item is and array and I will push the action.payload inside it
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            //removing one items from the end
            state.items.pop();
        },
        //reducer functions
        clearCart: (state, action) => {
            //this will make my item empty again,
            //if they  are 10 items in the cart then it will make it 0
            state.items.length = 0; //length 0 makes state as empty array.
        },
    },
}); 

//export 2 things from here actions & reducers
export const {addItem, removeItem, clearCart} = cartSlice.actions;  
export default cartSlice.reducer; 
import { createSlice, createSelector } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
            // state = [...state, action.payload]; 
            //here, we are mutating the state, state is immutable, instead we push the item into the state
            //difference between push and spread operator is that push will mutate the state and spread operator will create a new state

        },
    }
});
export const selectCart = createSelector(
    (state) => state.cart1,
    (state) => state
);
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
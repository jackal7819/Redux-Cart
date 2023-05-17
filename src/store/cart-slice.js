import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { cartIsVisible: false },
    reducers: {
        toogle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
});

export const uiActions = cartSlice.actions;

export default cartSlice;

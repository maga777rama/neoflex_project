import { createSlice } from "@reduxjs/toolkit";
import AppleBYZS852I from "../assets/AppleBYZS852I.png";

export type CartItemProps = {
    id: number;
    imgSrc: string;
    title: string;
    price: number;
    priceWithoutDiscount?: number;
    rate: number;
    wireless: boolean;
    count: number;
};

export interface CartSliceState {
    totalPrice: number;
    items: Array<CartItemProps>;
}

const initialState: CartSliceState = {
    totalPrice: 2927,
    items: [
        {
            id: 1,
            imgSrc: AppleBYZS852I,
            title: "AppleAirPods",
            price: 2927,
            priceWithoutDiscount: 3527,
            rate: 4.7,
            wireless: false,
            count: 1,
        },
    ],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const findItem = state.items.find(
                (item) => item.id === action.payload.id,
            );
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },

        minusItem: (state, action) => {
            const findItem = state.items.find(
                (item) => item.id === action.payload,
            );
            if (findItem) {
                findItem.count--;
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload,
            );
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;
export default cartSlice.reducer;

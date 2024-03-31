import { createSlice } from "@reduxjs/toolkit";

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
    items: [],
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
                if (findItem.count === 1) {
                    cartSlice.caseReducers.removeItem(state, action);
                } else {
                    findItem.count--;
                }
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return obj.price * obj.count + sum;
                }, 0);
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload,
            );
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },
    },
});

export const { addItem, removeItem, minusItem } = cartSlice.actions;
export default cartSlice.reducer;

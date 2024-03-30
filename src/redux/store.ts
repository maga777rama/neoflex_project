import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartClice.ts";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export type Rootstate = ReturnType<typeof store.getState>;

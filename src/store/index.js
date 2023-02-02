import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import uiSlice from "./reducers/uiSlice";



const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ul-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSlice, cart: cartSlice },
});

export default store;

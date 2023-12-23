import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { themeReducer } from "./themeSlice";
import { todoReducer } from "./todoSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    theme: themeReducer,
    todo: todoReducer,
  },
});

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  productsList: { loading: false, data: null, error: null },
  product: { loading: false, data: null, error: null },
};

export const fetchProducts = createAsyncThunk("fetch-products", async () => {
  const resp = await fetch(`https://dummyjson.com/products`);
  const data = await resp.json();

  if (!resp.ok) {
    throw "Error";
  }

  return data.products;
});

export const fetchProduct = createAsyncThunk(
  "fetch-single-product",
  async (id) => {
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await resp.json();

    if (!resp.ok) {
      throw "Error";
    }

    return data;
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsList.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsList.loading = false;
        state.productsList.data = action.payload;
        state.productsList.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsList.loading = false;
        state.productsList.data = null;
        state.productsList.error = action.payload;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.product.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product.loading = false;
        state.product.data = action.payload;
        state.product.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.product.loading = false;
        state.product.data = null;
        state.product.error = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;

export const useProductsSelector = () =>
  useSelector((state) => state.products.productsList);
export const useProductSelector = () =>
  useSelector((state) => state.products.product);

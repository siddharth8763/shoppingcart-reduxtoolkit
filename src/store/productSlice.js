import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },

  // Use it with Manual Method

  // reducers: {
  //   setProducts(state, action) {
  //     state.data = action.payload;
  //   },
  //   setStatuses(state, action) {
  //     state.status = action.payload;
  //   },
  // },

  // Use it with RTK Apis
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatuses } = productSlice.actions;
export default productSlice.reducer;

//thunks

//1- Manual Method
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatuses(STATUSES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       //dispatch it
//       dispatch(setProducts(data));
//       dispatch(setStatuses(STATUSES.IDLE));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatuses(STATUSES.ERROR));
//     }
//   };
// }

//2 - RTK APIs
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

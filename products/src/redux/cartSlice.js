import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getProductFromCart from './productFromCart';

export let getCart = createAsyncThunk('cart/getCart', async () => {
  let { data } = await axios.get('https://fakestoreapi.com/carts/1');
  console.log(data);

  const fullCart = await getProductFromCart(data);
  console.log(fullCart);

  return fullCart;
});

const initialState = {
  cart: [],
  length: 0,
  isLoading: false,
};

const cartSlicer = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cart = action.payload;
      state.length = action.payload.reduce(
        (total, item) => total + item.quantity,
        0
      );
    });
    builder.addCase(getCart.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.error.message);
    });
  },
});

export const {} = cartSlicer.actions;

const cartReducer = cartSlicer.reducer;

export default cartReducer;

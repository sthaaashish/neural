"use client";
import { createSlice } from "@reduxjs/toolkit";
import {
  setUser,
  getUser,
  clearLocal,
  getCart,
  setCart,
  clearCart,
} from "./localStorage";

interface UserState {
  user: any;
  carts: any;
}

const initialState: UserState = {
  user: getUser() || null, // Use null as a fallback if no user data is found
  carts: getCart(),
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      setUser(state.user);
    },
    clearUser: (state, action) => {
      state.user = null;
      clearLocal();
    },
    addCart: (state, action) => {
      const itemExist = state.carts.find(
        (item:any) => item.id === action.payload.id
      );
      if (itemExist) {
        itemExist.quantity++;
      } else {
        state.carts.push(action.payload);
        setCart(state.carts);
      }
    },
    incrementCartItem: (state, action) => {
      const item = state.carts.find((item:any) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.carts.find((item:any) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.carts.findIndex(
          (item:any) => item.id === action.payload
        );
        state.carts.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeCartItems:(state, action)=>{
      const index = state.carts.findIndex((item:any)=>item.id===action.payload);
      state.carts.splice(index, 1)
    },
    clearCartItems: (state) => {
      state.carts = [];
      clearCart();
    },
  },
});

export const { addUser, clearUser,incrementCartItem, decrementQuantity,addCart, clearCartItems, removeCartItems } =
  userSlice.actions;
export default userSlice.reducer;

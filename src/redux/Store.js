import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";//yahan bhi {cartSlice} --> se cartReducer kiya hai

export const store = configureStore({
    reducer:{
        cart:cartReducer,//yahan galti hui badi wali//cartSlice tha pehle cartReducer ki jagah
        //chalna chaiyeh tha
    }
});
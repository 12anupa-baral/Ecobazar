import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuantity } from "../pages/product/types";

const initialState: IQuantity = {
  quantity: 1,
};


const quantitySlice = createSlice({
  name: "quantity",
  initialState,
 reducers: {
  setQuantity(state, action: PayloadAction<number>) {
    state.quantity = action.payload;
  }
}
});

export const { setQuantity } = quantitySlice.actions;
export default quantitySlice.reducer; 

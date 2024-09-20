import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIceCream: 50,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState: initialState,
  reducers: {
    buyItem: (state, actions) => {
      state.numOfIceCream--;
    },

    restock: (state, actions) => {
      state.numOfIceCream += actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, actions) => {
      state.numOfIceCream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { buyItem, restock } = icecreamSlice.actions;

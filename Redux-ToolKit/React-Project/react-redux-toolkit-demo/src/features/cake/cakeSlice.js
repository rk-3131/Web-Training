import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state, actions) => {
      state.numOfCakes--;
    },
    restocked: (state, actions) => {
      state.numOfCakes += actions.payload;
    },
  },
});

export default cakeSlice.reducer;
export const {ordered, restocked} = cakeSlice.actions;

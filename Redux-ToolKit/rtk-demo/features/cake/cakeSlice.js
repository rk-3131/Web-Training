const createSlice = require("@reduxjs/toolkit").createSlice;

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
 
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
    builder.addCase(cakeActions.ordered, (state, actions) => {
      state.numOfIceCream--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;

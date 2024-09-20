const redux = require("redux");
const produce = require("immer").produce;

const createStore = redux.createStore;

const initialState = {
  name: "Radhakrushna Mahadik",
  address: {
    state: "Maharashtra",
    city: "Nagpur",
    area: "Ramnagar",
  },
};

const CHANGE_ADDRESS = "CHANGE_ADDRESS";

const chnageAddress = (add) => {
  return {
    type: CHANGE_ADDRESS,
    payload: add,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ADDRESS:
      return {
        ...state,
        address: {
          ...state.address,
          city: action.payload,
        },
      };

    default:
      return state;
  }
};
const reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ADDRESS:
      return produce(state, (draft) => {
        draft.address.city = action.payload;
      });

    default:
      return state;
  }
};

const store = createStore(reducer2);
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(chnageAddress("Pune"));

unsubscribe();

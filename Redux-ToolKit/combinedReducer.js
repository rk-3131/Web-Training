const redux = require("redux");
const CAKES = "CAKES";
const ICECREAMS = "ICECREAMS";
const CUSTOMERS = "CUSTOMERS";

const createStore = redux.createStore;
const combinedReducer = redux.combineReducers;

// states
const cakeStates = { 
  noOfCakes: 10,
};

const iceCreamState = {
  noOfIceCreams: 50,
};

const customerState = {
  noOfCustomers: 0,
};

// actions

const cakeAction = () => {
  return {
    type: CAKES,
  };
};

const iceCreamAction = () => {
  return {
    type: ICECREAMS,
  };
};

const customerAction = () => {
  return {
    type: CUSTOMERS,
  };
};

const iceCreameReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case ICECREAMS:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const cakeReducer = (state = cakeStates, action) => {
  switch (action.type) {
    case CAKES:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };

    default:
      return state;
  }
};

const customerReducer = (state = customerState, action) => {
  switch (action.type) {
    case CUSTOMERS:
      return {
        ...state,
        noOfCustomers: state.noOfCustomers + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combinedReducer({
  cake: cakeReducer,
  icecream: iceCreameReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
console.log("Initial state ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(cakeAction());
store.dispatch(iceCreamAction());
store.dispatch(customerAction());
store.dispatch(cakeAction());
store.dispatch(iceCreamAction());
store.dispatch(customerAction());
store.dispatch(cakeAction());
store.dispatch(iceCreamAction());
store.dispatch(customerAction());
store.dispatch(cakeAction());
store.dispatch(iceCreamAction());
store.dispatch(customerAction());
store.dispatch(cakeAction());
store.dispatch(iceCreamAction());
store.dispatch(customerAction());
store.dispatch(cakeAction());
store.dispatch(iceCreamAction());
store.dispatch(customerAction());

unsubscribe();

// Middleware is used to extend the functionality of the redux

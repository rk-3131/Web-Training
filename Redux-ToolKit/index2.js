const redux = require("redux");

const BUY_CAKE = "BUY_CAKE";
const SELL_CAKE = "SELL_CAKE";
const createStore = redux.createStore;

// There are three main components
// state actions and then reducer

// this is the state
// state is an object where there can be a property and then the value of the property
const defaultState = {
  nOfCakes: 10,
  noOfCusomer: 0,
};

// below  two are the action
// The action will also be object and it is contained in the function
const sellCake = () => {
  return {
    type: SELL_CAKE,
  };
};

const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELL_CAKE:
      return {
        ...state,
        nOfCakes: state.nOfCakes - 1,
        noOfCusomer: state.noOfCusomer + 1,
      };

    case BUY_CAKE:
      return {
        ...state,
        nOfCakes: state.nOfCakes + 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial state ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state ", store.getState())
);

store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellCake());

unsubscribe(); 

store.dispatch(sellCake());
store.dispatch(sellCake());

// import redux from `redux`
// this line is for the react code

const redux = require("redux");

const createStore = redux.createStore;

console.log("From index.js");

// The three core concepts
// store is used to hold the state of the application in it
// action is used to keep track of what happened to state
// reducer is used to carry out the transition depending on the action

const BUY_CAKE = "BUY_CAKE";

// This is the state which will hold the state of the application
// and as the first principal of redux tells us that all of the states in the redux are too be stored as object tree in single store
// Here we have stored the state of the application which is number of cakes in the single objects
const intitialState = {
  numOfCakes: 10,
};

// This is the action that we want to perform here and hence it is called as action as redux
// and as the second principle in the redux tells us that the only way to change the state is to emit an action and hence we have defined a function here which is defining an action
// The return part is the action and the function containing the action is called as the action creator
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux operation",
  };
};

// reducers
// (previousState, action) => newState
// This is the reducer and makes the changes in the values
// The state can be transformed by usinh reducers
// reducers will return the new object
const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        // This spread operator makes sure that the other properties of the state remains as they are
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
// redux store is created here which takes an argument which is reducer
// here redux store is holding the application state

console.log("initial state", store.getState());
// getState is a method which is called for the purpose of getting the state of the application

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
// the subscribe is a method whihch is used to set up a listener
// Hence this listener is a method which is used to get the updted state value after end of each of the change in the store

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();

const redux = require("redux");
const thunkMiddleWare = require("redux-thunk").thunk;
const axios = require("axios");

// https://api.spoonacular.com/recipes/complexSearch?query=roti&apiKey=4b98a20e6f044e7e8ffec8877128f01d
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

const FETCH_USER_DATA = "FETCH_USER_DATA";
const USER_DATA_SUCCESS = "USER_DATA_SUCCESS";
const USER_DATA_ERROR = "USER_DATA_ERROR";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "4b98a20e6f044e7e8ffec8877128f01d";
const inp = "pizza";

const defaultState = {
  loading: false,
  result: {},
  error: "",
};

const fetchData = () => {
  return {
    type: FETCH_USER_DATA,
  };
};

const fetchDataSuccess = (result) => {
  return {
    type: USER_DATA_SUCCESS,
    payload: result,
  };
};

const fetchDataError = (error) => {
  return {
    type: USER_DATA_ERROR,
    payload: error,
  };
};

const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        loading: true,
      };

    case USER_DATA_SUCCESS:
      return {
        loading: false,
        result: actions.payload,
        error: "",
      };

    case USER_DATA_ERROR:
      return {
        loading: false,
        result: {},
        error: actions.payload,
      };
  }
};

const fetchUsers = () => {
  return async function (dispatch) {
    dispatch(fetchData());

    try {
      const response = await axios.get(`${url}?query=${inp}&apiKey=${apiKey}`);
      dispatch(fetchDataSuccess(response.data.results)); // Assuming results is the key in your data response
    } catch (error) {
      dispatch(fetchDataError(error.message));
    }
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleWare));
// thunk middle ware is used to get the applymiddleware to use a function as return type
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());

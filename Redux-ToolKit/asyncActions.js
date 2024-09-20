const redux = require("redux");
const thunkMiddleWare = require("redux-thunk").thunk;
const axios = require("axios");

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

const FETCH_USER_DATA = "FETCH_USER_DATA";
const USER_DATA_SUCCESS = "USER_DATA_SUCCESS";
const USER_DATA_ERROR = "USER_DATA_ERROR";

const defaultState = {
  loading: false,
  users: [],
  error: "",
};

const fetchData = () => {
  return {
    type: FETCH_USER_DATA,
  };
};

const fetchDataSuccess = (users) => {
  return {
    type: USER_DATA_SUCCESS,
    payload: users,
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
        users: actions.payload,
        error: "",
      };

    case USER_DATA_ERROR:
      return {
        loading: false,
        users: [],
        error: actions.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchData());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((repsonse) => {
        const data = repsonse.data.map((user) => user.name);
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleWare));
// thunk middle ware is used to get the applymiddleware to use a function as return type
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());

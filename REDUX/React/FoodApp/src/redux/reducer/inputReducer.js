import { SET_INPUT } from "../actionNames/inputActionTypes";

const initialState = {};

export const inputReducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};

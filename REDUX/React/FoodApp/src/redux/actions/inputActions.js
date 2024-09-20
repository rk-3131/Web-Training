import SET_INPUT from '../actionNames/inputActionTypes'

export const setInput = (input) => {
  return {
    type: SET_INPUT,
    payload: input,
  };
};

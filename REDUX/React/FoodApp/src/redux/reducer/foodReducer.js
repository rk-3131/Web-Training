import {
  SELECTED_FOOD_ITEM,
  SET_FOOD_ID,
  SET_FOOD_ITEMS,
} from "../actionNames/foodActionTypes";

// defining the initial state for the food application

const initialState = {
  foodItems: [],
  recipe: {},
  foodId: "658615",
};

export const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.payload,
      };

    case SELECTED_FOOD_ITEM:
      return {
        ...state,
        recipe: action.payload,
      };

    case SET_FOOD_ID:
      return {
        ...state,
        foodId: action.payload,
      };

    default:
      return state;
  }
};

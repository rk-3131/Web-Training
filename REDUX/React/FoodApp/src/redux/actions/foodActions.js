import {
  SET_FOOD_ITEMS,
  SELECTED_FOOD_ITEM,
  SET_FOOD_ID,
} from "../actionNames/foodActionTypes";

export const setFoodItems = (foodItems) => {
  return {
    type: SET_FOOD_ITEMS,
    payload: foodItems,
  };
};

export const setFoodItem = (foodItem) => {
  return {
    type: SELECTED_FOOD_ITEM,
    payload: foodItem,
  };
};

export const setFoodId = (foodId) => {
  return {
    type: SET_FOOD_ID,
    payload: foodId,
  };
};

import { combineReducers } from "redux";
import { reducerFunction } from "./reducer/foodReducer";
import { inputReducerFunction } from "./reducer/inputReducer";


const rootReducer = combineReducers({
    food : reducerFunction, 
    input : inputReducerFunction
});

export default rootReducer;
import { combineReducers } from "redux";
import reducerLists from "./reducerLists";

const mainReducer = combineReducers({
  lists: reducerLists,
});

export default mainReducer;

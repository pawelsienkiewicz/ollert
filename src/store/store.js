import { createStore } from "redux";
import reducerLists from "../reducers/reducerLists";
import mainReducer from "../reducers/index";

const store = createStore(mainReducer);

export default store;

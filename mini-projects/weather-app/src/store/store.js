import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CoreReducer from "./CoreReducer";
const store = createStore(CoreReducer, applyMiddleware(thunk));
export default store;

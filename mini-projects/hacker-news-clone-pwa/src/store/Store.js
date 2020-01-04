import { createStore , applyMiddleware , compose , combineReducers } from 'redux';
import thunk from "redux-thunk";
import CoreReducer from "./reducers/CoreReducer";
import NewsReducer from './reducers/NewsReducer';
const combinedReducer = combineReducers({
  CoreReducer,
  NewsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
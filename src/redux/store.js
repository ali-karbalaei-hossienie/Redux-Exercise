import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import userReducer from "./user/userReducer";
import thunk from "redux-thunk";
const creatStore = legacy_createStore;
const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  users: userReducer,
});
const store = creatStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;

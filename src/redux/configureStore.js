import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  ///
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

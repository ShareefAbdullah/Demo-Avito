//library
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";
//store
import { homeAdsReducer } from "./homeAdsReducer/homeAdsReducer";
import { openAdReducer } from "./openAd/openAdReducer";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  homeAds: homeAdsReducer,
  openAd: openAdReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

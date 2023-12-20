import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { learnedWordsReducer, wordsReducer } from "./words/reducer";
import { productsReducer } from "./products/reducer";

const rootReducer = combineReducers({
  words: wordsReducer,
  learnedWords: learnedWordsReducer,
  products: productsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(thunk)),
);

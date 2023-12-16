import { createStore, combineReducers, compose } from "redux";
import { themeReducer } from "./theme/reducer";
import { todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  {},
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

import { Provider } from "react-redux";
import { store } from "./store/store";
import { Home } from "./pages/home";
import { Todo } from "./pages/todo";
import { Products } from "./pages/products";

import "./App.css";

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
      <Todo />
      <Products />
    </Provider>
  );
};

export default App;

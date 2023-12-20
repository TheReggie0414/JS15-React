import { Provider } from "react-redux";
import { store } from "./store/store";
// import { Home } from "./pages/home";
import { Products } from "./pages/products";

import "./App.css";

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        {/* <Home /> */}
        <Products />
      </main>
    </Provider>
  );
};

export default App;

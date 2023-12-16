import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Home } from "./pages/home";
import { Settings } from "./pages/settings";

import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/setting">
              <Settings />
            </Route>
          </Switch>
        </main>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

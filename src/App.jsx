import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages/home";
import { Contacts } from "./pages/contacts";

import "./App.css";

const ProtectedRoute = ({ children, allowed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (allowed ? children : <Redirect to="/" />)}
    />
  );
};

export const App = () => {
  const [admin, setAdmin] = useState(false);
  return (
    <BrowserRouter>
      <main>
        <header>
          <button onClick={() => setAdmin(!admin)}>Admin: {`${admin}`}</button>
          <nav>
            <p>Layout</p>
            <NavLink to="/" activeClassName="selected" exact>
              Go to home page
            </NavLink>
            <br />
            <NavLink to="/contacts" activeClassName="selected">
              Go to contacts page
            </NavLink>
            <br />
            <NavLink to="/admin" activeClassName="selected">
              Go to admin page
            </NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Redirect from="/aaa" to="/" />
          <ProtectedRoute path="/admin" allowed={admin}>
            <h1>Admin</h1>
          </ProtectedRoute>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;

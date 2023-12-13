import React from "react";
import {
  Link,
  Switch,
  Route,
  // useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { User } from "../components/user";

const users = [
  { name: "taras" },
  { name: "oleh" },
  { name: "yana" },
  { name: "ihor" },
];

export const Contacts = () => {
  // const location = useLocation();
  const history = useHistory();
  const routeMatch = useRouteMatch();
  console.log("routeMatch==>>", routeMatch);

  return (
    <section>
      <h1>Contacts</h1>
      <Link to="/">Go to home page</Link>
      <br />
      <Link
        to={{
          pathname: "/",
          search: "?sort=name",
          hash: "#the-hash",
        }}
      >
        Go to home page with query params
      </Link>
      <br />
      <button onClick={history.goBack}>Go back</button>
      <button onClick={history.goForward}>Go Forward</button>
      <button onClick={() => history.go(-2)}>Go -2</button>
      <button onClick={() => history.push("/")}>Push to home</button>
      <button onClick={() => history.replace("/")}>Replace to home</button>

      <div style={{ border: "1px solid black" }}>
        <p>Select User</p>
        {users.map((user) => (
          <React.Fragment key={user.name}>
            <Link to={`${routeMatch.path}/${user.name}`}>
              {user.name} contacts
            </Link>
            <br />
          </React.Fragment>
        ))}
      </div>

      <Switch>
        <Route path="/contacts/:id">
          <User />
        </Route>
      </Switch>
    </section>
  );
};

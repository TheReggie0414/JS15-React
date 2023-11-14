import { useState, useEffect } from "react";
import { Box } from "./components/box";
import { Button } from "./components/button";
import { Greetings } from "./components/greetings";
import { List } from "./components/list";
import { Search } from "./sections/search";
import list from "./folder/const";
import { arr } from "./utils/math";

import "./App.css";

// const useHook = () => {};

// const count = () => {
//   useHook();
// };

export const App = () => {
  const state = useState(0);
  const [count, setCount] = state;
  const [authorised, setAuthorised] = useState(false);
  const [theme, setTheme] = useState("white");
  const [arrList, setArrList] = useState(arr);

  useEffect(() => {
    console.log("mount effect===>>", count);
    console.log("authorised effect===>>", authorised);
  }, [count, authorised]);
  console.log("🚀 ~ file: App.jsx:23 ~ App ~ arrList==>>", arrList);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click {count}
      </button>
      <button
        onClick={() => {
          setAuthorised((prevSate) => {
            const nextSate = !prevSate;
            return nextSate;
          });
        }}
      >
        {authorised ? "Log out" : "Log in"}
      </button>
      <h1>{authorised ? "You logged in successfully" : "Please log in"}</h1>
      <button
        onClick={() => {
          setArrList((prevState) => {
            const nextState = prevState.slice(0);
            nextState.sort((a, b) => a - b);
            return nextState;
          });
        }}
      >
        Sort list
      </button>
      <p>{arrList}</p>

      <br />
      {/* Theme */}
      <button
        onClick={() => {
          setTheme(theme === "white" ? "black" : "white");
        }}
      >
        Change theme
      </button>
      <p className="light">Theme: {theme}</p>
      <div
        className={theme === "white" ? "light" : "dark"}
        style={{
          width: "100%",
          height: "200px",
          // backgroundColor: theme === "white" ? "#ededed" : "#0b0b0b",
        }}
      />
      {/* Theme */}
      <Box>
        <List list={list} />
        <Search />
        <Greetings greet />
        <Button text={theme} />
      </Box>
    </>
  );
};

export default App;

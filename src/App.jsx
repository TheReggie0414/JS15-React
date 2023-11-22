import { useCallback, useEffect, useState } from "react";
import { HeaderMemo } from "./components/header";
import { Section } from "./components/section";
import "./App.css";

const add = (a, b) => a + b;
const arr = [1, 2, 3, 4, 5];

export const App = () => {
  const [theme, setTheme] = useState("light");

  const onClickMemo = useCallback(() => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }, []);

  // const arr = [props.a, props.b];

  useEffect(() => {
    console.log(
      "🚀 ~ file: App.jsx:19 ~ useEffect ~ add(1, 1)==>>",
      add(arr[0], arr[1]),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arr, add]);

  return (
    <>
      <HeaderMemo
        // theme={theme}
        onClick={onClickMemo}
      />
      <Section theme={theme} />
    </>
  );
};

export default App;

import { useEffect, useState, useCallback } from "react";
import { ButtonMemo } from "./components/button";

import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  const [state, setState] = useState(0);

  // const sum = (a, b) => a + b;

  const sum = useCallback((a, b) => {
    console.log("useCallback", b);
    return a + b;
  }, []);

  const onClick = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  useEffect(() => {
    console.log("effect", sum(count, num));
  }, [count, num, sum]);

  return (
    <div>
      <p>{count}</p>
      <ButtonMemo onClick={onClick} title="Click" />

      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        {state}
      </button>
      <input
        type="number"
        onBlur={(e) => {
          const value = +e.target.value;
          setNum(value);
        }}
      />
    </div>
  );
};

export default App;

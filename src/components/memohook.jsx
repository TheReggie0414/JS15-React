import { useEffect, useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const memoValue = useMemo(() => {
    const factorial = (n) => {
      return n <= 1 ? 1 : n * factorial(n - 1);
    };
    return factorial(num);
  }, [num]);

  const memoObj = useMemo(() => {
    return { a: 1 };
  }, []);
  // const obj = { a: 1 };

  useEffect(() => {
    console.log("obj", memoObj);
  }, [memoObj]);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <p>memoValue: {memoValue}</p>
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

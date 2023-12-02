import { useState } from "react";

export const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return <div>{children(count, increaseCount)}</div>;
};

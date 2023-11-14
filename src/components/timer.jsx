import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <p>{time}</p>;
};

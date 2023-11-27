import { useRef, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();

  const onStart = () => {
    timerRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
  };
  const onStop = () => {
    timerRef.current && clearInterval(timerRef.current);
  };
  const onReset = () => {
    setTimer(0);
    timerRef.current && clearInterval(timerRef.current);
  };

  return (
    <div>
      <p>{timer}</p>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

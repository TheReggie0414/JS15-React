import { useRef, useState } from "react";
import { Timer } from "./components/timer";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Scroller } from "./components/scroller";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const counterRef = useRef(0);
  const buttonRef = useRef();
  const divRef = useRef(null);
  const componentButtonRef = useRef(null);
  console.log(
    "🚀 ~ file: App.jsx:15 ~ App ~ componentButtonRef==>>",
    componentButtonRef,
  );
  console.log("🚀 ~ file: App.jsx:11 ~ App ~ divRef==>>", divRef);
  console.log("🚀 ~ file: App.jsx:10 ~ App ~ buttonRef==>>", buttonRef);
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ ref==>>", ref);
  return (
    <>
      <div ref={divRef}>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increase count
        </button>
      </div>
      <button
        onClick={() => {
          ref.current = ref.current + 1;
        }}
      >
        increase ref
      </button>
      <Timer />
      <button
        ref={buttonRef}
        onClick={() => {
          counterRef.current += 1;
          alert(`You clicked: ${counterRef.current} times`);
        }}
      >
        Show count
      </button>
      <Input />
      <Button ref={componentButtonRef} />
      <Scroller />
    </>
  );
};

export default App;

import { useRef, useState } from "react";
import { ColorPicker } from "./components/colorpicker";

import "./App.css";

export const App = () => {
  const [color, setColor] = useState();
  const inputRef = useRef(null);
  const mainRef = useRef(null);
  const countRef = useRef(0);
  let count = 0;
  console.log("🚀 ~ file: homework.jsx:9 ~ App ~ inputRef==>>", inputRef);

  const onClick = () => {
    setColor(inputRef.current.value);
  };

  return (
    <main ref={mainRef}>
      <ColorPicker ref={inputRef} />
      <button onClick={onClick}>Get Color</button>
      <p>Selected Color: {color}</p>
      <button
        onClick={() => {
          count++;
          countRef.current += 1;
          console.log("count", count);
          console.log("countRef", countRef.current);
        }}
      >
        Increase count
      </button>
    </main>
  );
};

export default App;

import { useRef } from "react";

export const Input = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current && inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
};

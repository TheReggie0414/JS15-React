import { forwardRef } from "react";

export const Block = forwardRef(function Block({ text }, ref) {
  return (
    <div
      ref={ref}
      style={{
        border: "1px solid black",
        height: "100vh",
        width: "100vw",
        fontSize: "50px",
      }}
    >
      {text}
    </div>
  );
});

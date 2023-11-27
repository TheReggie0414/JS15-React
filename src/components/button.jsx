import { forwardRef } from "react";

export const Button = forwardRef(function Button(props, ref) {
  return <button ref={ref}>Button with forward ref</button>;
});

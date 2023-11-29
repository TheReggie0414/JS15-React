import { forwardRef } from "react";

export const ColorPicker = forwardRef(function ColorPicker(props, ref) {
  return <input type="color" ref={ref} />;
});

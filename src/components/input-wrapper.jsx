import { useState } from "react";

export const InputWrapper = ({ children }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return children(value, onChange);
};

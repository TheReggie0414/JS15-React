import { useState } from "react";

export const Button = () => {
  const [open, setOpen] = useState(true);

  return (
    <button onClick={() => setOpen(!open)}>{open ? "Open" : "Close"}</button>
  );
};

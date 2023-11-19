import { memo } from "react";

export const Button = ({ title, onClick }) => {
  console.log("btn rerender");
  return <button onClick={onClick}>{title}</button>;
};

export const ButtonMemo = memo(Button);

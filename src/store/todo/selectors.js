import { useSelector } from "react-redux";

export const useTodoSelector = () => {
  return useSelector((state) => state.todo);
};

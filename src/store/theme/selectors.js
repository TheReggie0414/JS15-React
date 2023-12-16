import { useSelector } from "react-redux";

export const useThemeSelector = () =>
  useSelector((state) => {
    return state.theme;
  });

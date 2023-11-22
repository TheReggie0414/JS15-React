import { useContext } from "react";
import { ThemeContext } from "../provider/theme";

export const useThemeContext = () => useContext(ThemeContext);

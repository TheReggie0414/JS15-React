import { useThemeContext } from "../hooks/useThemeContext";

export const ThemeButton = () => {
  const { theme } = useThemeContext();

  return <button>{theme}</button>;
};

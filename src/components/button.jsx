import { useThemeContext } from "../hooks/useThemeContext";

export const Button = () => {
  const { theme } = useThemeContext();

  return <button>{theme}</button>;
};

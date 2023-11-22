import { useContext } from "react";
import { ThemeContext } from "../provider/theme";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { value, updateValue, clearValue } = useLocalStorage("key");

  return (
    <>
      <p>{theme}</p>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change theme
      </button>
      <br />
      {value}
      <button
        onClick={() => {
          updateValue(theme);
        }}
      >
        Update local
      </button>
      <button onClick={clearValue}>Delete local</button>
    </>
  );
};

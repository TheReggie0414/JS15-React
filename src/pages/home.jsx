import { useDispatch } from "react-redux";
import { useThemeSelector, changeTheme } from "../store/themeSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const theme = useThemeSelector();

  const onClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(changeTheme(newTheme));
  };

  return (
    <div>
      <p>{theme}</p>
      <button onClick={onClick}>Change Theme</button>
    </div>
  );
};

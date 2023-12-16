import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme } from "../store/theme/actions";
import { useThemeSelector } from "../store/theme/selectors";

export const Settings = () => {
  const dispatch = useDispatch();
  const theme = useThemeSelector();

  const onClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    const action = changeTheme(newTheme);

    dispatch(action);
  };

  return (
    <section>
      <Link to="/">Home</Link>
      <p>Current theme: {theme}</p>
      <button onClick={onClick}>Change theme</button>
    </section>
  );
};

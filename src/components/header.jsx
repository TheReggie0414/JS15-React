import { useUserContext } from "../provider/user";
import { Button } from "./button";

export const Header = () => {
  const { user, setUser } = useUserContext();

  const onClick = async () => {
    const resp = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      }),
    });
    const data = await resp.json();
    setUser(data);
  };

  return (
    <header style={{ display: "flex", justifyContent: "flex-end" }}>
      {user ? (
        <p>{user.username}</p>
      ) : (
        <Button text="Login" onClick={onClick} />
      )}
    </header>
  );
};

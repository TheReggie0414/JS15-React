import { useState } from "react";

export const Async = () => {
  const [userName, setUserName] = useState("");

  const onClick = async () => {
    const res = await fetch("https://dummyjson.com/users/1");
    const data = await res.json();
    setUserName(data.username);
  };

  return (
    <div>
      <button onClick={onClick}>Get Data</button>
      {userName && <p>Hello {userName}</p>}
    </div>
  );
};

import { memo } from "react";

export const Header = ({ onClick }) => {
  console.log("Header render");
  return (
    <header>
      <button onClick={onClick}>Change theme</button>
    </header>
  );
};

export const HeaderMemo = memo(Header);

import { useEffect } from "react";

export const Button = ({ onClick }) => {
  useEffect(() => {
    console.log("Button rendered===>>");

    return () => {
      console.log("Button unmounted===>>");
    };
  }, []);

  useEffect(() => {
    const resize = (e) => {
      console.log("resize==>>", e);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <button onClick={onClick}>Click me</button>;
};

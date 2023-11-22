import { useEffect } from "react";

export const useWindowFocus = () => {
  useEffect(() => {
    const focus = (e) => {
      console.log("focus==>>", e);
    };

    window.addEventListener("focus", focus);

    return () => {
      window.removeEventListener("focus", focus);
    };
  }, []);
};

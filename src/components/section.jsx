import { useContext } from "react";
import { Button } from "./button";
import { LangContext } from "../provider/lang";

export const Section = () => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <>
      <h1>{lang}</h1>
      <button
        onClick={() => {
          setLang(lang === "ukr" ? "eng" : "ukr");
        }}
      >
        Change lang
      </button>
      <Button />
    </>
  );
};

import { createContext, useState } from "react";

export const LangContext = createContext("ukr");

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("ukr");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

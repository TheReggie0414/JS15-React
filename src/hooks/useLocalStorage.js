import { useState } from "react";

export const useLocalStorage = (key) => {
  const initialValue = localStorage.getItem(key);
  const [value, setValue] = useState(initialValue);

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  const clearValue = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return { value, updateValue, clearValue };
};

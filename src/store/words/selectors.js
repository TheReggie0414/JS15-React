import { useSelector } from "react-redux";

export const useWordsSelector = () => useSelector((store) => store.words);
export const useLearnedWordsSelector = () =>
  useSelector((store) => store.learnedWords);

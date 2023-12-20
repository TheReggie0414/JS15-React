import { MARK_WORD } from "./actions";
import { words } from "../../words";

export const wordsReducer = (state = words, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const learnedWordsReducer = (state = [], action) => {
  switch (action.type) {
    case MARK_WORD:
      return [action.payload, ...state];
    default:
      return state;
  }
};

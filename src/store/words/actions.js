export const MARK_WORD = "MARK_WORD";

export const markWord = (word) => {
  return { type: MARK_WORD, payload: word };
};

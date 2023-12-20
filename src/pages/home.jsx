import { useDispatch } from "react-redux";
import { markWord } from "../store/words/actions";
import {
  useWordsSelector,
  useLearnedWordsSelector,
} from "../store/words/selectors";

export const Home = () => {
  const dispatch = useDispatch();
  const allWords = useWordsSelector();
  const learnedWords = useLearnedWordsSelector();

  const onClick = (word) => () => {
    const action = markWord(word);
    dispatch(action);
  };

  return (
    <div>
      <ol>
        {allWords.map((word, index) => (
          <li key={index} onClick={onClick(word)}>
            {word}
          </li>
        ))}
      </ol>
      <p>Learned words</p>
      <ul>
        {learnedWords.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

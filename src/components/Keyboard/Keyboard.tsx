import { useDispatch, useSelector } from 'react-redux';
import { guessGetter, guessSetter } from '../../features/guessWordSlice';

// styling
import './Keyboard.scss';

// alphabets
import alphabets from './constants/alphabets';

export function Keyboard() {

  const guessWord = useSelector(guessGetter.all);
  const lang = useSelector(guessGetter.getLang);
  const dispatch = useDispatch();
  const handleClick = (letter: string) => {
    letter = letter.toLowerCase();
    dispatch(guessSetter.setList(letter));
    if (guessWord.word.includes(letter)) {
      const numOfChars = guessWord.word
        .split('')
        .filter((el: any) => el === letter).length;
      dispatch(guessSetter.setTry(guessWord.try + numOfChars));
    } else {
      dispatch(guessSetter.setFail(guessWord.fail + 1));
    }
  };

  return (
    <div className="Keyboard">
      {alphabets[lang].map((letter) => {
        letter = letter.toLowerCase();
        let classList = ['kLetter'];
        if (guessWord.list.includes(letter)) classList.push('kLetterDisabled');
        return (
          <div
            key={letter}
            className={classList.join(' ')}
            onClick={
              guessWord.list.includes(letter)
                ? undefined
                : (e) => {
                    handleClick(letter);
                  }
            }
          >
            <p>{letter}</p>
          </div>
        );
      })}
    </div>
  );
}

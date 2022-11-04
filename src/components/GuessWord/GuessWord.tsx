import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guessGetter, guessSetter } from '../../features/guessWordSlice';
import words from '../../words.json';
import './GuessWord.scss';

function GuessWord() {
  const word = useSelector(guessGetter.getWord);
  const letterList = useSelector(guessGetter.getList);
  const dispatch = useDispatch();
  useEffect(() => {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    dispatch(guessSetter.setWord(randomWord));
  }, []);
  return (
    <div className="GuessWord">
      {word.split('').map((el: string, index: number) => {
        return (
          <div key={Math.random() * Math.random()}>
            <p
              style={{
                visibility: letterList.includes(el) ? 'visible' : 'hidden',
              }}
            >
              {el}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default GuessWord;

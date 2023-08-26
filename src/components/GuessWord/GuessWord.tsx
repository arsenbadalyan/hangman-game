import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guessGetter, guessSetter } from '../../features/guessWordSlice';

// words list
import wordsList from './constants/words';

import './GuessWord.scss';

function GuessWord() {

  const gameStatus = useSelector(guessGetter.getMainStatus);

  const word = useSelector(guessGetter.getWord);
  const letterList = useSelector(guessGetter.getList);
  const lang: string = useSelector(guessGetter.getLang);
  const dispatch = useDispatch();

  const wordsLength = useMemo((): number => wordsList[lang].length, [lang]);

  /* eslint-disable */
  useEffect(() => {
    let randomWord = wordsList[lang][Math.floor(Math.random() * wordsLength)];
    dispatch(guessSetter.setWord(randomWord));
  }, [lang, gameStatus]);
  /* eslint-enable */
  
  return (
    <div className="GuessWord">
      {word.split('').map((el: string, index: number) => {
        const isIncluded = letterList.includes(el.toLowerCase());

        return (
          <div key={index}>
            <p>
              {isIncluded ? el : "?"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default GuessWord;

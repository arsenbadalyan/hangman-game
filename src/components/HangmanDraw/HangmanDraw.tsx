import { useSelector } from 'react-redux';
import { guessGetter } from '../../features/guessWordSlice';
import './HangmanDraw.scss';

import HangmanParts from './constants/HangmanParts';

export function HangmanDraw() {
  const fails = useSelector(guessGetter.getFail);
  const chances = useSelector(guessGetter.getChances);

  return (
    <div
      className={
        fails === chances ? 'HangmanDraw HangmanDrawLose' : 'HangmanDraw'
      }
    >
      { HangmanParts.slice(0, fails) }
      <div className="HangmanDraw_Bottom" />
    </div>
  );
}

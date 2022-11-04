import { useSelector } from 'react-redux';
import '../../App.scss';
import { guessGetter } from '../../features/guessWordSlice';
export function GameStatus() {
  const fails = useSelector(guessGetter.getFail);
  return (
    <div className="GameStatus">
      <p>Մնաց: {6 - fails} փորձ</p>
    </div>
  );
}

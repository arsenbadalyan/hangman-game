import { useSelector } from 'react-redux';
import { guessGetter } from '../../features/guessWordSlice';
import './HangmanDraw.scss';

const HEAD = () => {
  return <div className="HangmanDraw_Head" />;
};

const BODY = () => {
  return <div className="HangmanDraw_Body" />;
};

const RIGHT_HAND = () => {
  return <div className="HangmanDraw_RHand" />;
};

const LEFT_HAND = () => {
  return <div className="HangmanDraw_LHand" />;
};

const RIGHT_LEG = () => {
  return <div className="HangmanDraw_RLeg" />;
};

const LEFT_LEG = () => {
  return <div className="HangmanDraw_LLeg" />;
};

const HUMAN = [
  <HEAD key={0} />,
  <BODY key={1} />,
  <LEFT_HAND key={2} />,
  <RIGHT_HAND key={3} />,
  <LEFT_LEG key={4} />,
  <RIGHT_LEG key={5} />,
];

export function HangmanDraw() {
  const fails = useSelector(guessGetter.getFail);
  return (
    <div
      className={
        fails === HUMAN.length ? 'HangmanDraw HangmanDrawLose' : 'HangmanDraw'
      }
    >
      {HUMAN.slice(0, fails)}
      <div className="HangmanDraw_BottomStick" />
      <div className="HangmanDraw_Right" />
      <div className="HangmanDraw_Top" />
      <div className="HangmanDraw_Bottom" />
    </div>
  );
}

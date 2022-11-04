import { useDispatch, useSelector } from 'react-redux';
import { guessGetter, guessSetter } from '../../features/guessWordSlice';
import './Keyboard.scss';
// const alphabet = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z',
// ];
const alphabet_hy = [
  'ա',
  'բ',
  'գ',
  'դ',
  'ե',
  'զ',
  'է',
  'ը',
  'թ',
  'ժ',
  'ի',
  'լ',
  'խ',
  'ծ',
  'կ',
  'հ',
  'ձ',
  'ղ',
  'ճ',
  'մ',
  'յ',
  'ն',
  'շ',
  'ո',
  'չ',
  'պ',
  'ջ',
  'ռ',
  'ս',
  'վ',
  'տ',
  'ր',
  'ց',
  'ու',
  'փ',
  'ք',
  'և',
  'օ',
  'ֆ',
];
export function Keyboard() {
  const guessWord = useSelector(guessGetter.all);
  // console.log(guessWord);
  const dispatch = useDispatch();
  const handleClick = (letter: string) => {
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
      {alphabet_hy.map((letter) => {
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

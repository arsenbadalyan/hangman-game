// redux tools
import { useDispatch, useSelector } from 'react-redux';
import { guessGetter, guessSetter } from '../../features/guessWordSlice';

// constants
import { TRANSLATIONS } from '../../constants';

// styling
import './GameStatus.scss'

// languages data
import { languagesData } from './constants/LanguagesData';

export function GameStatus() {

  const fails = useSelector(guessGetter.getFail);
  const lang = useSelector(guessGetter.getLang);
  const chances = useSelector(guessGetter.getChances);

  const dispatch = useDispatch();

  const changeLanguage = (newLang: string): void => {
    if (newLang === lang)
      return ;
    
    dispatch(guessSetter.resetState());
    dispatch(guessSetter.setLang(newLang));
  };

  return (
    <div className="GameStatus">
      <div className="GameStatus-flags">
        {languagesData.map(item => (
          <img
            key={item.lang}
            src={item.src}
            alt={item.imgAlt}
            className={`${lang !== item.lang ? 'disabled' : ''}`}
            onClick={() => changeLanguage(item.lang)} />
        ))}
      </div>
      <div className="GameStatus-tries">
        <p>{ TRANSLATIONS.tries[lang](chances - fails) }</p>
      </div>
    </div>
  );
}

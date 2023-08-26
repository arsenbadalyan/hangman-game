// redux state
import { useDispatch } from 'react-redux';
import { setAllModal } from '../../features/modalSlice';
import { guessSetter } from '../../features/guessWordSlice';

// styling
import './Modal.scss';

export function Modal({ settings }: any) {

  const dispatch = useDispatch();

  if (!settings.show) return null;

  function handleAction(action: string) {
    if (action === 'restart') {
      dispatch(guessSetter.resetState());
    } else if (action === 'cancel') {
      dispatch(setAllModal.close());
    }
  }

  return (
    <div className="Modal">
      <div className="Modal_window">
        <div className="Modal_info">
          <p>{settings.text}</p>
        </div>
        {settings.actions.length && (
          <div className="Modal_action">
            {settings.actions.map((el: any, index: number) => {
              return (
                <button key={index} onClick={() => handleAction(el.action)}>
                  {el.value}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

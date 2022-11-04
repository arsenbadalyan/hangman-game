import { useDispatch } from 'react-redux';
import { setAllModal } from '../../features/modalSlice';
import './Modal.scss';
export function Modal({ settings }: any) {
  const modalDispatch = useDispatch();
  if (!settings.show) return null;
  function handleAction(action: string) {
    if (action === 'restart') {
      window.location.reload();
    } else if (action === 'cancel') {
      modalDispatch(setAllModal.close());
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

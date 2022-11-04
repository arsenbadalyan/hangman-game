import { createStore, combineReducers, applyMiddleware } from 'redux';
import { guessWordReducer } from '../features/guessWordSlice';
import { ModalReducer, setAllModal } from '../features/modalSlice';

const checkGameOver = (store: any) => (next: any) => (action: any) => {
  const state = store.getState();
  if (
    action.type === 'change-fail' &&
    !(state.guessWord.chances - action.payload.newState)
  ) {
    action.type = 'change-fail-and-status';
    action.payload.gameIsOver = true;
    store.dispatch(setAllModal.fail());
    next(action);
  } else if (
    action.type === 'change-try' &&
    state.guessWord.word.length === action.payload.newState
  ) {
    action.type = 'change-try-and-status';
    action.payload.gameIsOver = true;
    action.payload.winStatus = true;
    store.dispatch(setAllModal.win());
    next(action);
  } else if (!state.guessWord.isOver || action.type.split('-')[0] === 'modal') {
    next(action);
  }
};

export const store = createStore(
  combineReducers({
    guessWord: guessWordReducer,
    modal: ModalReducer,
  }),
  {
    guessWord: {
      word: '',
      try: 0,
      fail: 0,
      list: [],
      isOver: false,
      chances: 6,
      win: false,
    },
    modal: {
      show: false,
      infoText: '',
      actions: [],
    },
  },
  applyMiddleware(checkGameOver)
);

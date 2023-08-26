import { createStore, applyMiddleware } from 'redux';
import { guessWordReducer } from '../features/guessWordSlice';
import { ModalReducer, setAllModal } from '../features/modalSlice';
import cloneDeep from 'lodash/cloneDeep';

const generateModalReset = (gameIsOver: boolean, winStatus: boolean) => ({
  type: 'change-try-and-status',
  payload: {
    gameIsOver,
    winStatus
  }
});

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
    action = generateModalReset(true, true);
    store.dispatch(setAllModal.win());
    next(action);
  } else if (!state.guessWord.isOver || action.type.split('-')[0] === 'modal') {
    next(action);
  } else if (action.type === 'reset-state') {
    next(generateModalReset(false, false));
    store.dispatch(setAllModal.close());
    next(action);
  }
};

export const guessWordInitialState = {
  word: '',
  try: 0,
  fail: 0,
  list: [],
  isOver: false,
  chances: 9,
  win: false,
  lang: "en"
};

function customReducers(state: any, action: any) {
  return {
    guessWord: guessWordReducer(state.guessWord, action, state),
    modal: ModalReducer(state.modal, action, state)
  };
}

export const store = createStore(
  customReducers,
  {
    guessWord: cloneDeep(guessWordInitialState),
    modal: {
      show: false,
      infoText: '',
      actions: [],
    },
  },
  applyMiddleware(checkGameOver)
);

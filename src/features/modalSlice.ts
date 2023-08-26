import { TRANSLATIONS } from "../constants";

export const ModalReducer = (state: any = {}, action: any, allState: any) => {

  const { lang } = allState.guessWord;

  const defaultList = {
    win: {
      show: true,
      text: TRANSLATIONS.message.youWin[lang],
      actions: [
        {
          value: TRANSLATIONS.btns.restart[lang],
          action: 'restart',
        },
        {
          value: TRANSLATIONS.btns.cancel[lang],
          action: 'cancel',
        },
      ],
    },
    fail: {
      show: true,
      text: TRANSLATIONS.message.youLose[lang],
      actions: [
        {
          value: TRANSLATIONS.btns.restart[lang],
          action: 'restart',
        },
      ],
    },
  };
  if (action.type === 'modal-win-info') {
    return defaultList.win;
  } else if (action.type === 'modal-fail-info') {
    return defaultList.fail;
  } else if (action.type === 'modal-close') {
    return {
      ...state,
      show: false,
    };
  }
  return state;
};

export const getAllModal = ({ modal }: any) => {
  return modal;
};

export const setAllModal = {
  win: () => {
    return {
      type: 'modal-win-info',
    };
  },
  fail: () => {
    return {
      type: 'modal-fail-info',
    };
  },
  close: () => {
    return {
      type: 'modal-close',
    };
  },
};

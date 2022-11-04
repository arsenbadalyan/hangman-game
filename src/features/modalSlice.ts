export const ModalReducer = (state: any = {}, action: any) => {
  const defaultList = {
    win: {
      show: true,
      text: 'Yes you win!!',
      actions: [
        {
          value: 'Restart',
          action: 'restart',
        },
        {
          value: 'Cancel',
          action: 'cancel',
        },
      ],
    },
    fail: {
      show: true,
      text: 'Ohhh you lose ... !Game over!',
      actions: [
        {
          value: 'Restart',
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

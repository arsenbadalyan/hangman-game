export function guessWordReducer(state: any = {}, action: any) {
  if (action.type === 'change-try') {
    return {
      ...state,
      try: action.payload.newState,
    };
  } else if (action.type === 'change-try-and-status') {
    return {
      ...state,
      try: action.payload.newState,
      isOver: action.payload.gameIsOver,
      win: action.payload.winStatus,
    };
  } else if (action.type === 'change-fail') {
    return {
      ...state,
      fail: action.payload.newState,
    };
  } else if (action.type === 'change-fail-and-status') {
    return {
      ...state,
      fail: action.payload.newState,
      isOver: action.payload.gameIsOver,
    };
  } else if (action.type === 'change-word') {
    return {
      ...state,
      word: action.payload.newState,
    };
  } else if (action.type === 'add-to-list') {
    state.list.push(action.payload.letter);
    const newList = state.list.slice();
    return {
      ...state,
      list: newList,
    };
  }
  return state;
}

export const guessGetter = {
  getTry: ({ guessWord }: any) => {
    return guessWord.try;
  },
  getWord: ({ guessWord }: any) => {
    return guessWord.word;
  },
  getFail: ({ guessWord }: any) => {
    return guessWord.fail;
  },
  getList: ({ guessWord }: any) => {
    return guessWord.list;
  },
  all: ({ guessWord }: any) => {
    return guessWord;
  },
};

export const guessSetter = {
  setTry: (newState: number) => {
    return {
      type: 'change-try',
      payload: {
        newState,
      },
    };
  },
  setWord: (newState: string) => {
    return {
      type: 'change-word',
      payload: {
        newState,
      },
    };
  },
  setFail: (newState: number) => {
    return {
      type: 'change-fail',
      payload: {
        newState,
      },
    };
  },
  setList: (letter: string) => {
    return {
      type: 'add-to-list',
      payload: {
        letter,
      },
    };
  },
};

export function getRandomWord() {}

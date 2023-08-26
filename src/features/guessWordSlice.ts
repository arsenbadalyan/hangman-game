import { guessWordInitialState } from "../app/store";

export function guessWordReducer(state: any = {}, action: any, allState: any = {}) {
  const { lang } = state;
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
  } else if (action.type === 'change-language') {
    return {
      ...state,
      lang: action.payload.lang
    }
  } else if (action.type === 'reset-state') {
    return {
      ...guessWordInitialState,
      list: [],
      lang
    }
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
  getLang: ({ guessWord }: any) => {
    return guessWord.lang;
  },
  getChances: ({ guessWord }: any) => {
    return guessWord.chances;
  },
  all: ({ guessWord }: any) => {
    return guessWord;
  },
  getMainStatus: ({ guessWord }: any) => guessWord.isOver
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
  setLang: (lang: string) => {
    return {
      type: 'change-language',
      payload: {
        lang
      }
    }
  },
  resetState: () => {
    return {
      type: 'reset-state'
    }
  }
};

export function getRandomWord() {}

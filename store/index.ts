import { useMemo } from 'react';
import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import _ from 'lodash';

export const VISITED_LESSON = 'VISITED_LESSON';

export const visitLesson = (lesson: string) => {
  return {
    type: VISITED_LESSON,
    payload: lesson,
  };
};

export interface RootState {
  learn: {
    lessons: {
      [key: string]: {
        visited: boolean;
      };
    };
  };
}

export const initState: RootState = {
  learn: {
    lessons: {},
  },
};

let existingStore: Store | null = null;

const reducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case VISITED_LESSON: {
      return {
        ...state,
        learn: {
          ...state.learn,
          lessons: {
            ...state.learn.lessons,
            [action.payload]: {
              ...(state.learn.lessons[action.payload] || {}),
              visited: true,
            },
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

const initStore = (state = initState) => {
  return createStore(reducer, state, composeWithDevTools(applyMiddleware()));
};

export const initializeStore = (state?: RootState) => {
  console.log('initializing store', state);

  let _store = existingStore ?? initStore(state);

  if (state && existingStore) {
    _store = initStore(_.merge({}, state, existingStore.getState()));
  }

  if (typeof window === 'undefined') return _store;

  existingStore = _store;
  return _store;
};

export const useStore = (state?: RootState) => {
  const store = useMemo(() => initializeStore(state), [state]);
  return store;
};

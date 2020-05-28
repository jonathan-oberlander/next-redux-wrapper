import { createStore, applyMiddleware, combineReducers, AnyAction, CombinedState } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { someReducer } from './reducers';

// middleware for dev 
const bindMiddleware = (middleware: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// combination 
const rootReducer = combineReducers({
  someReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// Hydrate page on pre-rendering
const appReducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  } else {
    return rootReducer(state, action);
  }
};

const initStore = () => createStore(appReducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore, { debug: true });

// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const initialState = {};

const customMiddleware = store => next => action => {
  const { type, data, meta } = action;
  if (process.env.NODE_ENV === 'development') {
    console.log({
      type,
      ...data,
      ...meta
    });
  }
  next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(customMiddleware))
);

export default store;
// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './state/rootReducer';
import thunk from 'redux-thunk';
import history from './history';
import { CALL_HISTORY_METHOD } from './state/routerActions';
import { REPORT_ERROR } from './state/reportError';

declare var Raven: any;

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
  return next(action);
};

const errorMiddleware = () => next => action => {
  if (action.type !== REPORT_ERROR) {
    return next(action);
  }

  let error = action.data;

  if (process.env.NODE_ENV === 'development') {
    // log exception in console on development
    console.log(error);
  } else {
    // on Production Report error to Raven https://docs.sentry.io/clients/javascript/#manually-reporting-errors
    Raven.captureException(error);
  }

  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunk,
      customMiddleware,
      routerMiddleware(history),
      errorMiddleware
    )
  )
);

export default store;

/**
 * This middleware captures CALL_HISTORY_METHOD actions and calls the History Api.
 * The main advantage is that helps avoid calling history inside the action creators.
 *
 * Thanks to https://github.com/reactjs/react-router-redux/blob/master/src/middleware.js
 * Initial idea from https://github.com/reactjs/react-router-redux#what-if-i-want-to-issue-navigation-events-via-redux-actions
 */
function routerMiddleware(history) {
  return () => next => action => {
    if (action.type !== CALL_HISTORY_METHOD) {
      return next(action);
    }

    const { payload: { method, args } } = action;
    history[method](...args);
  };
}

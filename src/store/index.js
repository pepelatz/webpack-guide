/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = [thunk];

const composeEnhancers =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose; // eslint-disable-line

let state;
if (typeof window !== 'undefined') {
  state = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
}

const store = createStore(
  reducers,
  state,
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };

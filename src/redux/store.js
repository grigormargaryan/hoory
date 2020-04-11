import storage from 'redux-persist/es/storage';
import { applyMiddleware, createStore } from 'redux';
import { createFilter } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducer';

export default (history) => {
  const persistedAuthFilter = createFilter('auth', ['isAuthenticated', 'userInfo']);
  const persistedGlobalsFilter = createFilter('globals', ['appSidebar']);
  const middlewareHistory = routerMiddleware(history);
  const reducer = persistReducer(
    {
      key: 'hoory',
      storage: storage,
      whitelist: ['auth'],
      transforms: [persistedAuthFilter, persistedGlobalsFilter],
    },
    rootReducer,
  );
  const middlewares = [createLogger, middlewareHistory];
  const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  return new Promise((resolve, reject) => {
    persistStore(store, null, () => {
      resolve(store);
    });
  });
};

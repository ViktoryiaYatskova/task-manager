import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { logError } from 'utils/logger';
import rootReducer, { history } from './rootReducer';
import rootSaga from './rootSaga';

const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware({
  onError: (error, { sagaStack }) => {
    logError('Something came up', error, sagaStack);
  },
});
const initialState = {};
const enhancers = [];
const middlewares = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: false,
    immutableCheck: { warnAfter: 300 },
  }),
  routerMiddleware,
  sagaMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  enhancers,
  preloadedState: initialState,
  devTools: { trace: true },
});

sagaMiddleware.run(rootSaga);

export { history };

export default store;

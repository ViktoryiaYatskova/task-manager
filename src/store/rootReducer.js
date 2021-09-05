import { createBrowserHistory } from 'history'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import tasksReducer from 'reducers/tasksReducer/tasksReducer';

const history = createBrowserHistory();

const reducer = combineReducers({
  router: connectRouter(history),
  tasks: tasksReducer,
});

export { history }

export default reducer

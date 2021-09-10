import { createBrowserHistory } from 'history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { tasksReducer, subTasksReducer, appReducer } from 'reducers';

const history = createBrowserHistory();

const reducer = combineReducers({
  router: connectRouter(history),
  tasks: tasksReducer,
  subTasks: subTasksReducer,
  app: appReducer,
});

export { history };

export default reducer;

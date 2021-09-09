import { createBrowserHistory } from 'history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import tasksReducer from 'reducers/tasksReducer/tasksReducer';
import subTasksReducer from 'reducers/subTasksReducer/subTasksReducer';
import appReducer from 'reducers/appReducer/appReducer';

const history = createBrowserHistory();

const reducer = combineReducers({
  router: connectRouter(history),
  tasks: tasksReducer,
  subTasks: subTasksReducer,
  app: appReducer,
});

export { history };

export default reducer;

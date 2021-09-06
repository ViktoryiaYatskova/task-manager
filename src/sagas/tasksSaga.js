import { put, takeEvery, call } from 'redux-saga/effects';
import fetchTasks from '../api/tasks/fetchTasks';
import createTask from '../api/tasks/createTask';
import {
  tasksFetchAction,
  tasksSetAction,
  taskCreateAction,
} from '../reducers/tasksReducer/actions';

export function* fetchTasksSaga() {
  const tasks = yield call(fetchTasks);

  yield put(tasksSetAction(tasks));
}

export function* createTasksSaga({ payload: newTask }) {
  yield call(createTask, newTask);
  yield call(fetchTasksSaga);
}

export function* watchTasksActions() {
  yield takeEvery(tasksFetchAction, fetchTasksSaga);
  yield takeEvery(taskCreateAction, createTasksSaga);
}

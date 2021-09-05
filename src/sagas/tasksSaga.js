import { put, takeEvery, call } from 'redux-saga/effects'
import fetchTasks from '../api/tasks/fetchTasks';

export function* fetchTasksSaga() {
  const tasks = yield call(fetchTasks);

  yield put({ type: 'tasks/set', payload: tasks });
}

export function* watchFetchTasks() {
  yield takeEvery('tasks/fetch', fetchTasksSaga)
}

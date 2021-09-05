import { put, takeEvery, call } from 'redux-saga/effects'
import fetchTasks from '../api/tasks/fetchTasks';
import { tasksFetchAction, tasksSet } from '../reducers/tasksReducer/actions'

export function* fetchTasksSaga() {
  const tasks = yield call(fetchTasks);

  yield put(tasksSet(tasks));
}

export function* watchFetchTasks() {
  yield takeEvery(tasksFetchAction, fetchTasksSaga)
}

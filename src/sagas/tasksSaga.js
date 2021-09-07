import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchTasks, createTask } from 'api/tasks';
import { tasksFetchAction, tasksSetAction, taskCreateAction } from 'reducers/tasksReducer/actions';

export function* fetchTasksSaga() {
  const tasks = yield call(fetchTasks);

  yield put(tasksSetAction(tasks));
}

export function* createTaskSaga({ payload: newTask }) {
  yield call(createTask, newTask);
  yield call(fetchTasksSaga);
}

export function* watchTasksActions() {
  yield takeEvery(tasksFetchAction, fetchTasksSaga);
  yield takeEvery(taskCreateAction, createTaskSaga);
}

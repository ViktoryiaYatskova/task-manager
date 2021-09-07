import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchTasks, createTask } from 'api/tasks';
import { fetchSubTasks } from 'api/subTasks';
import {
  tasksFetchAction,
  tasksSetAction,
  taskCreateAction,
  subTasksFetchAction,
  subTasksSetAction,
} from 'reducers/tasksReducer/actions';

export function* fetchTasksSaga() {
  const tasks = yield call(fetchTasks);

  yield put(tasksSetAction(tasks));
}

export function* createTaskSaga({ payload: newTask }) {
  yield call(createTask, newTask);
  yield call(fetchTasksSaga);
}

export function* fetchSubTasksSaga({ payload: taskId }) {
  const subTasks = yield call(fetchSubTasks, taskId);

  yield put(subTasksSetAction({ taskId, subTasks }));
}

export function* watchTasksActions() {
  yield takeEvery(tasksFetchAction, fetchTasksSaga);
  yield takeEvery(taskCreateAction, createTaskSaga);
  yield takeEvery(subTasksFetchAction, fetchSubTasksSaga);
}

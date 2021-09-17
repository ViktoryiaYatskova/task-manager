import { put, takeEvery, takeLatest, call, select, fork } from 'redux-saga/effects';
import { fetchTasks, createTask, deleteTask, findTasks } from 'api/tasks';
import {
  tasksFetchAction,
  tasksSetAction,
  taskCreateAction,
  tasksSetFoundAction,
  taskDeleteSucceedAction,
} from 'reducers/tasksReducer/actions';
import { searchItemsAction } from 'reducers/appReducer/actions';
import { subTaskDeleteSucceedAction } from 'reducers/subTasksReducer/actions';
import { subTasksByTaskIdSelector } from 'reducers/subTasksReducer/selectors';
import { isSearchModeSelector, searchQuerySelector } from 'reducers/appReducer/selectors';
import { isLastSubTask } from 'helpers/subTaskHelpers';
import { logError } from 'utils/logger';

export function* fetchTasksSaga() {
  const tasks = yield call(fetchTasks);

  yield put(tasksSetAction(tasks));
}

export function* findTasksSaga() {
  const searchQuery = yield select(searchQuerySelector);

  if (searchQuery) {
    const tasks = yield call(findTasks, searchQuery);

    yield put(tasksSetFoundAction(tasks));
  }
}

export function* createTaskSaga({ payload: newTask }) {
  yield call(createTask, newTask);
  yield call(fetchTasksSaga);
}

export function* deleteTaskSaga({ payload: taskId }) {
  try {
    yield call(deleteTask, taskId);
    // on success
    yield put(taskDeleteSucceedAction());
  } catch (error) {
    // eslint-disable-next-line no-console
    logError('Delete task failed:', error);
  }
}

export function* deleteEmptyTaskSaga({ payload: subTask }) {
  const { taskId, id: subTaskId } = subTask;
  const subTasksList = yield select(subTasksByTaskIdSelector, taskId);

  if (isLastSubTask(subTaskId, subTasksList)) {
    yield call(deleteTaskSaga, { payload: taskId });
  }
}

export function* updateTasksListsSaga() {
  const isSearchMode = yield select(isSearchModeSelector);

  if (isSearchMode) {
    yield fork(findTasksSaga);
  }
  yield fork(fetchTasksSaga);
}

export function* watchTasksActions() {
  yield takeLatest(tasksFetchAction.type, fetchTasksSaga);
  yield takeEvery(taskCreateAction.type, createTaskSaga);
  yield takeLatest(searchItemsAction.type, findTasksSaga);
  yield takeEvery(subTaskDeleteSucceedAction.type, deleteEmptyTaskSaga);
  yield takeLatest(taskDeleteSucceedAction.type, updateTasksListsSaga);
}

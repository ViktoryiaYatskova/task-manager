import { put, takeEvery, takeLatest, call, select } from 'redux-saga/effects';
import { fetchTasks, createTask, deleteTask, findTasks } from 'api/tasks';
import {
  tasksFetchAction,
  tasksSetAction,
  taskCreateAction,
  subTaskDeleteSucceedAction,
  tasksSetFoundAction,
  findTasksAndSubTasksAction,
} from 'reducers/tasksReducer/actions';
import { subTasksByTaskIdSelector } from 'reducers/tasksReducer/selectors';
import { isLastSubTask } from 'helpers/subTaskHelpers';
import logError from 'utils/logger';

export function* fetchTasksSaga() {
  const tasks = yield call(fetchTasks);

  yield put(tasksSetAction(tasks));
}

export function* findTasksSaga({ payload: title }) {
  const tasks = yield call(findTasks, title);

  yield put(tasksSetFoundAction(tasks));
}

export function* createTaskSaga({ payload: newTask }) {
  yield call(createTask, newTask);
  yield call(fetchTasksSaga);
}

export function* deleteTaskSaga({ payload: taskId }) {
  try {
    yield call(deleteTask, taskId);
    yield call(fetchTasksSaga);
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

export function* watchTasksActions() {
  yield takeLatest(tasksFetchAction.type, fetchTasksSaga);
  yield takeEvery(taskCreateAction.type, createTaskSaga);
  yield takeLatest(findTasksAndSubTasksAction.type, findTasksSaga);
  yield takeEvery(subTaskDeleteSucceedAction.type, deleteEmptyTaskSaga);
}

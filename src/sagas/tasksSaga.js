import { put, takeEvery, call, select } from 'redux-saga/effects';
import { fetchTasks, createTask, deleteTask } from 'api/tasks';
import {
  tasksFetchAction,
  tasksSetAction,
  taskCreateAction,
  subTaskDeleteSucceedAction,
} from 'reducers/tasksReducer/actions';
import { subTasksSelector } from 'reducers/tasksReducer/selectors';
import { isLastSubTask } from 'helpers/subTaskHelpers';

export function* fetchTasksSaga() {
  const tasks = yield call(fetchTasks);

  yield put(tasksSetAction(tasks));
}

export function* createTaskSaga({ payload: newTask }) {
  yield call(createTask, newTask);
  yield call(fetchTasksSaga);
}

export function* deleteTaskSaga({ payload: taskId }) {
  try {
    yield call(deleteTask, taskId);
    yield call(fetchTasks);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Delete task failed:', error);
  }
}

export function* deleteEmptyTaskSaga({ payload: subTask }) {
  const { taskId, id: subTaskId } = subTask;
  const subTasksList = yield select(subTasksSelector, taskId);

  if (isLastSubTask(subTaskId, subTasksList)) {
    yield call(deleteTaskSaga);
  }
}

export function* watchTasksActions() {
  yield takeEvery(tasksFetchAction, fetchTasksSaga);
  yield takeEvery(taskCreateAction, createTaskSaga);
  yield takeEvery(subTaskDeleteSucceedAction, deleteEmptyTaskSaga);
}

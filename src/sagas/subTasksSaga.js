import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchSubTasks, deleteSubTask, findSubTasks } from 'api/subTasks';
import {
  subTasksFetchAction,
  subTasksSetAction,
  subTaskDeleteAction,
  subTaskDeleteSucceedAction,
  findTasksAndSubTasksAction,
  subTasksSetFoundAction,
} from 'reducers/tasksReducer/actions';
import logError from 'utils/logger';

export function* fetchSubTasksSaga({ payload: taskId }) {
  const subTasks = yield call(fetchSubTasks, taskId);

  yield put(subTasksSetAction({ taskId, subTasks }));
}

export function* findSubTasksSaga({ payload: title }) {
  const subTasks = yield call(findSubTasks, title);

  yield put(subTasksSetFoundAction(subTasks));
}

export function* deleteSubTaskSaga({ payload: subTask }) {
  try {
    const { id: subTaskId, taskId } = subTask;

    yield call(deleteSubTask, subTaskId);
    // on success delete:
    yield put(subTaskDeleteSucceedAction(subTask));
    yield call(fetchSubTasksSaga, { payload: taskId });
  } catch (error) {
    logError('Delete subTask request failed:', error);
  }
}

export function* watchSubTasksActions() {
  yield takeEvery(subTasksFetchAction, fetchSubTasksSaga);
  yield takeEvery(subTaskDeleteAction, deleteSubTaskSaga);
  yield takeEvery(findTasksAndSubTasksAction, findSubTasksSaga);
}

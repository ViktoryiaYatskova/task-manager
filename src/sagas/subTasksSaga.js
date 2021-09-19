import { put, takeEvery, call, takeLatest, select } from 'redux-saga/effects';
import { fetchSubTasks, deleteSubTask, findSubTasks, findSubTasksByLabel } from 'api/subTasks';
import {
  subTasksFetchAction,
  subTasksSetAction,
  subTaskDeleteAction,
  subTaskDeleteSucceedAction,
  subTasksSetFoundAction,
} from 'reducers/subTasksReducer/actions';
import { searchItemsAction, searchItemsByLabelAction } from 'reducers/appReducer/actions';
import { searchQuerySelector, filtersSelector } from 'reducers/appReducer/selectors';
import { logError } from 'utils/logger';

export function* fetchSubTasksSaga({ payload: taskId }) {
  const subTasks = yield call(fetchSubTasks, taskId);

  yield put(subTasksSetAction({ taskId, subTasks }));
}

export function* findSubTasksSaga() {
  const searchQuery = yield select(searchQuerySelector);

  if (searchQuery) {
    const subTasks = yield call(findSubTasks, searchQuery);

    yield put(subTasksSetFoundAction(subTasks));
  }
}

export function* findSubTasksByLabelSaga() {
  const labels = yield select(filtersSelector);

  if (labels) {
    const subTasks = yield call(findSubTasksByLabel, labels);

    yield put(subTasksSetFoundAction(subTasks));
  }
}

export function* deleteSubTaskSaga({ payload: subTask }) {
  try {
    const { id: subTaskId } = subTask;

    yield call(deleteSubTask, subTaskId);
    // on success delete:
    yield put(subTaskDeleteSucceedAction(subTask));
  } catch (error) {
    logError('Delete subTask request failed:', error);
  }
}

export function* watchSubTasksActions() {
  yield takeEvery(subTasksFetchAction.type, fetchSubTasksSaga);
  yield takeEvery(subTaskDeleteAction.type, deleteSubTaskSaga);
  yield takeLatest(searchItemsAction.type, findSubTasksSaga);
  yield takeLatest(searchItemsByLabelAction.type, findSubTasksByLabelSaga);
}

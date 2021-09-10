import { put, takeEvery, call, takeLatest, select, fork } from 'redux-saga/effects';
import { fetchSubTasks, deleteSubTask, findSubTasks, findSubTasksByLabel } from 'api/subTasks';
import {
  subTasksFetchAction,
  subTasksSetAction,
  subTaskDeleteAction,
  subTaskDeleteSucceedAction,
  subTasksSetFoundAction,
  searchSubTasksByLabelAction,
} from 'reducers/subTasksReducer/actions';
import { searchItemsAction } from 'reducers/appReducer/actions';
import { subTaskFiltersSelector } from 'reducers/subTasksReducer/selectors';
import { isSearchModeSelector, searchQuerySelector } from 'reducers/appReducer/selectors';
import logError from 'utils/logger';

export function* fetchSubTasksSaga({ payload: taskId }) {
  const subTasks = yield call(fetchSubTasks, taskId);

  yield put(subTasksSetAction({ taskId, subTasks }));
}

export function* findSubTasksSaga() {
  const searchQuery = select(searchQuerySelector);

  if (searchQuery) {
    const subTasks = yield call(findSubTasks, searchQuery);

    yield put(subTasksSetFoundAction(subTasks));
  }
}

export function* findSubTasksByLabelSaga() {
  const labels = yield select(subTaskFiltersSelector);

  if (labels) {
    const subTasks = yield call(findSubTasksByLabel, labels);

    yield put(subTasksSetFoundAction(subTasks));
  }
}

export function* deleteSubTaskSaga({ payload: subTask }) {
  try {
    const { id: subTaskId, taskId } = subTask;
    const isSearchMode = select(isSearchModeSelector);

    yield call(deleteSubTask, subTaskId);
    // on success delete:
    yield put(subTaskDeleteSucceedAction(subTask));

    if (isSearchMode) {
      // refetch found subtask to show relevant data
      yield fork(findSubTasksByLabelSaga);
      yield fork(findSubTasksSaga);
    } else {
      yield call(fetchSubTasksSaga, { payload: taskId });
    }
  } catch (error) {
    logError('Delete subTask request failed:', error);
  }
}

export function* watchSubTasksActions() {
  yield takeEvery(subTasksFetchAction.type, fetchSubTasksSaga);
  yield takeEvery(subTaskDeleteAction.type, deleteSubTaskSaga);
  yield takeLatest(searchItemsAction.type, findSubTasksSaga);
  yield takeLatest(searchSubTasksByLabelAction.type, findSubTasksByLabelSaga);
}

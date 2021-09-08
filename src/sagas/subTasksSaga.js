import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchSubTasks, deleteSubtask } from 'api/subTasks';
import {
  subTasksFetchAction,
  subTasksSetAction,
  subTaskDeleteAction,
  subTaskDeleteSucceedAction,
} from 'reducers/tasksReducer/actions';

export function* fetchSubTasksSaga({ payload: taskId }) {
  const subTasks = yield call(fetchSubTasks, taskId);

  yield put(subTasksSetAction({ taskId, subTasks }));
}

export function* deleteSubTaskSaga({ payload: subTask }) {
  try {
    const { id: subTaskId, taskId } = subTask;

    yield call(deleteSubtask, subTaskId);
    // on success delete:
    yield put(subTaskDeleteSucceedAction(subTask));
    yield call(fetchSubTasksSaga, { payload: taskId });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Delete subTask request failed:', error);
  }
}

export function* watchSubTasksActions() {
  yield takeEvery(subTasksFetchAction, fetchSubTasksSaga);
  yield takeEvery(subTaskDeleteAction, deleteSubTaskSaga);
}

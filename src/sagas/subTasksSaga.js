import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchSubTasks } from 'api/subTasks';
import { subTasksFetchAction, subTasksSetAction } from 'reducers/tasksReducer/actions';

export function* fetchSubTasksSaga({ payload: taskId }) {
  const subTasks = yield call(fetchSubTasks, taskId);

  yield put(subTasksSetAction({ taskId, subTasks }));
}

export function* watchSubTasksActions() {
  yield takeEvery(subTasksFetchAction, fetchSubTasksSaga);
}

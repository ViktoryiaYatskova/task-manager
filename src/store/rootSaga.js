import { all, takeEvery, call } from 'redux-saga/effects';
import { fetchTasksSaga, watchTasksActions } from 'sagas/tasksSaga';
import { watchSubTasksActions } from 'sagas/subTasksSaga';

function* initApp() {
  yield call(fetchTasksSaga);
}

export default function* () {
  yield takeEvery('app/init', initApp);
  yield all([watchTasksActions(), watchSubTasksActions()]);
}

import { all, takeLatest, call } from 'redux-saga/effects';
import { fetchTasksSaga, watchTasksActions } from 'sagas/tasksSaga';
import { watchSubTasksActions } from 'sagas/subTasksSaga';

function* initApp() {
  yield call(fetchTasksSaga);
}

export default function* () {
  yield takeLatest('app/init', initApp);
  yield all([watchTasksActions(), watchSubTasksActions()]);
}

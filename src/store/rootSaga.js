import { all, takeEvery, call } from 'redux-saga/effects'
import { fetchTasksSaga, watchTasksActions } from '../sagas/tasksSaga'

function* initApp() {
  yield call(fetchTasksSaga);
}

export default function* () {
  yield takeEvery('app/init', initApp);
  yield all([
    watchTasksActions(),
  ]);
}

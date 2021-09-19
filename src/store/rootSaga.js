import { all } from 'redux-saga/effects';
import { watchTasksActions } from 'sagas/tasksSaga';
import { watchSubTasksActions } from 'sagas/subTasksSaga';

export default function* () {
  yield all([watchTasksActions(), watchSubTasksActions()]);
}

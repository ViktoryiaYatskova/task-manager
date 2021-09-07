import { expectSaga } from 'redux-saga-test-plan';
import { fetchTasksSaga } from '../tasksSaga';
import { fetchTasks } from 'api/tasks';
import { tasksSetAction, tasksFetchAction } from 'reducers/tasksReducer';

jest.mock('api/tasks', {
  fetchTasks: jest.fn(),
  createTask: jest.fn(),
});

describe('#fetchTasksSaga', () => {
  it('should fetch tasks and put them into store', () => {
    // Prepare
    const fakeTasksResponse = [{ id: 42, title: 'Fake task' }];

    return (
      expectSaga(fetchTasksSaga)
        .call(fetchTasks)
        .put(tasksSetAction(fakeTasksResponse))

        .dispatch(tasksFetchAction())

        // Start the test. Returns a Promise.
        .run()
    );
  });
});

import { testSaga } from 'redux-saga-test-plan';
import { tasksSetAction } from 'reducers/tasksReducer/actions';
import { fetchTasks, createTask } from 'api/tasks';
import { fetchTasksSaga, createTaskSaga } from '../tasksSaga';

jest.mock('api/tasks', () => ({
  fetchTasks: jest.fn(),
  createTask: jest.fn(),
}));

describe('#fetchTasksSaga', () => {
  it('should fetch tasks and put them into store', () => {
    // Prepare
    const fakeTasksResponse = [{ id: 42, title: 'Fake task' }];

    testSaga(fetchTasksSaga)
      .next()
      .call(fetchTasks)

      .next(fakeTasksResponse)
      .put(tasksSetAction(fakeTasksResponse))

      .next()
      .isDone();
  });
});

describe('#createTaskSaga', () => {
  it('should create task and refetch the updated list', () => {
    // Prepare
    const fakeTask = { title: 'Fake task' };

    testSaga(createTaskSaga, { payload: fakeTask })
      .next()
      .call(createTask, fakeTask)

      .next()
      .call(fetchTasksSaga)

      .next()
      // Start the test. Returns a Promise.
      .isDone();
  });
});

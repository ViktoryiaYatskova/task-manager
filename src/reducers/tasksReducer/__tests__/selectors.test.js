import { isSearchModeSelector } from 'reducers/appReducer/selectors';
import { visibleTasksSelector } from '../selectors';

jest.mock('reducers/appReducer/selectors', () => ({
  isSearchModeSelector: jest.fn(),
}));

describe('tasksSelectors', () => {
  describe('#visibleTasksSelector', () => {
    const foundTask = {
      id: 'Bbbb',
      title: 'Some title of found Task',
    };
    const anotherTask1 = {
      id: 'Cccccc',
      title: 'Some title 2',
    };
    const taskOfFoundSubTask = {
      id: 'DDddd',
      title: 'Some title of taskOfFoundSubTask',
    };

    it('should return visible tasksList in not search mode', () => {
      isSearchModeSelector.mockImplementation(() => false);
      const state = {
        tasks: {
          foundTasksList: [foundTask],
          tasksList: [foundTask, anotherTask1, taskOfFoundSubTask],
        },
        subTasks: {
          foundSubTasksList: [{ id: '123', taskId: taskOfFoundSubTask.id, title: 'Found SubTask' }],
        },
      };

      expect(visibleTasksSelector(state)).toStrictEqual([
        foundTask,
        anotherTask1,
        taskOfFoundSubTask,
      ]);
    });

    it('should return foundTasks + tasks of foundSubTasks in search mode', () => {
      isSearchModeSelector.mockImplementation(() => true);
      const state = {
        tasks: {
          foundTasksList: [foundTask],
          tasksList: [foundTask, anotherTask1, taskOfFoundSubTask],
        },
        subTasks: {
          foundSubTasksList: [{ id: '123', taskId: taskOfFoundSubTask.id, title: 'Found SubTask' }],
        },
      };

      expect(visibleTasksSelector(state)).toStrictEqual([foundTask, taskOfFoundSubTask]);
    });
  });
});

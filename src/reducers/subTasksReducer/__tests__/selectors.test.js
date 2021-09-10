import { isSearchModeSelector } from 'reducers/appReducer/selectors';
import { visibleSubTasksByTaskIdSelectorFactory } from '../selectors';

jest.mock('reducers/appReducer/selectors', () => ({
  isSearchModeSelector: jest.fn(),
}));

describe('SubTasksSelectors', () => {
  describe('#visibleSubTasksByTaskIdSelectorFactory', () => {
    const foundSubTask = {
      id: 'Bbbb',
      taskId: '13',
      title: 'Some title 2',
    };
    const anotherSubTask = {
      id: 'DDddd',
      taskId: '97',
      title: 'Some title 2',
    };

    it('should return subTasksList corresponding taskId in not search mode', () => {
      isSearchModeSelector.mockImplementation(() => false);
      const state = {
        subTasks: {
          foundSubTasksList: [foundSubTask],
          allSubTasks: {
            13: [foundSubTask, anotherSubTask],
            42: [
              {
                id: 'Aaaa',
                taskId: '42',
                title: 'Some title 1',
              },
            ],
            9: [
              {
                id: 'Ccccc',
                taskId: '9',
                title: 'Some title 3',
              },
            ],
          },
        },
      };

      expect(visibleSubTasksByTaskIdSelectorFactory('13')(state)).toStrictEqual([
        foundSubTask,
        anotherSubTask,
      ]);
    });

    it('should return foundSubTasks corresponding taskId in search mode', () => {
      isSearchModeSelector.mockImplementation(() => true);
      const state = {
        subTasks: {
          foundSubTasksList: [foundSubTask],
          allSubTasks: {
            13: [foundSubTask, anotherSubTask],
            42: [
              {
                id: 'Aaaa',
                taskId: '42',
                title: 'Some title 1',
              },
            ],
            9: [
              {
                id: 'Ccccc',
                taskId: '9',
                title: 'Some title 3',
              },
            ],
          },
        },
      };

      expect(visibleSubTasksByTaskIdSelectorFactory('13')(state)).toStrictEqual([foundSubTask]);
    });
  });
});

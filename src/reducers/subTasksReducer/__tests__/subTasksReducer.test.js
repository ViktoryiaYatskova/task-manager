import { setAppModeAction } from 'reducers/appReducer/actions';
import reducer from '../subTasksReducer';
import {
  subTasksSetAction,
  subTasksSetFoundAction,
  subTasksResetFoundAction,
  searchSubTasksByLabelAction,
} from '../actions';

describe('SubTasksReducer', () => {
  describe('#subTasksSetAction', () => {
    it('should set new subTasksList', () => {
      const subTasks = [
        { title: 'fake', id: '42', taskId: '13' },
        { title: 'fake2', id: '3', taskId: '13' },
      ];

      expect(reducer({}, subTasksSetAction({ taskId: '13', subTasks }))).toStrictEqual({
        allSubTasks: {
          [subTasks[0].taskId]: subTasks,
        },
      });
    });
  });

  describe('#subTasksSetFoundAction', () => {
    it('should set new foundTasksList', () => {
      const foundSubTasks = [{ title: 'fake', id: '42' }];

      expect(reducer({}, subTasksSetFoundAction(foundSubTasks))).toStrictEqual({
        foundSubTasksList: foundSubTasks,
      });
    });
  });

  describe('#subTasksResetFoundAction', () => {
    it('should clear foundTasksList', () => {
      const mockedStateWithFoundTasks = {
        foundSubTasksList: [{ title: 'fake', id: '42' }],
      };

      expect(reducer(mockedStateWithFoundTasks, subTasksResetFoundAction())).toStrictEqual({
        foundSubTasksList: [],
      });
    });
  });

  describe('#setAppModeAction', () => {
    it('should keep same filters if it is a search mode', () => {
      const mockedStateWithFilters = {
        filters: ['l1', 'l2'],
      };

      expect(reducer(mockedStateWithFilters, setAppModeAction(true))).toStrictEqual({
        filters: ['l1', 'l2'],
      });
    });

    it('should reset filters if search mode is left', () => {
      const mockedStateWithFilters = {
        filters: ['l1', 'l2'],
      };

      expect(reducer(mockedStateWithFilters, setAppModeAction(false))).toStrictEqual({
        filters: [],
      });
    });
  });

  describe('#searchSubTasksByLabelAction', () => {
    it('should set new label to the filters list', () => {
      const mockedStateWithFilters = {
        filters: ['someLabel', 'oldLabel'],
      };

      expect(
        reducer(mockedStateWithFilters, searchSubTasksByLabelAction('someLabel')),
      ).toStrictEqual({
        filters: ['someLabel', 'oldLabel'],
      });
    });

    it('should not set label duplicates', () => {
      const mockedStateWithFilters = {
        filters: ['someLabel', 'oldLabel'],
      };

      expect(
        reducer(mockedStateWithFilters, searchSubTasksByLabelAction('someLabel')),
      ).toStrictEqual({
        filters: ['someLabel', 'oldLabel'],
      });
    });
  });
});

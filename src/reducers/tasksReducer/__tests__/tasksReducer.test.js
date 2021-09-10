import reducer from '../tasksReducer';
import { tasksSetAction, tasksSetFoundAction, tasksResetFoundAction } from '../actions';

describe('TasksReducer', () => {
  describe('#tasksSetAction', () => {
    it('should set new tasksList', () => {
      const tasks = [{ title: 'fake', id: '42' }];

      expect(reducer({}, tasksSetAction(tasks))).toStrictEqual({
        tasksList: tasks,
      });
    });
  });

  describe('#tasksSetFoundAction', () => {
    it('should set new foundTasksList', () => {
      const foundTasks = [{ title: 'fake', id: '42' }];

      expect(reducer({}, tasksSetFoundAction(foundTasks))).toStrictEqual({
        foundTasksList: foundTasks,
      });
    });
  });

  describe('#tasksResetFoundAction', () => {
    it('should clear foundTasksList', () => {
      const mockedStateWithFoundTasks = {
        foundTasksList: [{ title: 'fake', id: '42' }],
      };

      expect(reducer(mockedStateWithFoundTasks, tasksResetFoundAction())).toStrictEqual({
        foundTasksList: [],
      });
    });
  });
});

import { createReducer } from '@reduxjs/toolkit';
import { tasksSetAction, subTasksSetAction } from './actions';

const initialTasksState = {
  tasksList: [],
  allSubTasks: {},
};

const tasksReducer = createReducer(initialTasksState, builder => {
  builder.addCase(tasksSetAction, (state, { payload }) => ({
    ...state,
    tasksList: payload,
  }));
  builder.addCase(subTasksSetAction, (state, { payload }) => ({
    ...state,
    allSubTasks: {
      ...state.allSubTasks,
      [payload.taskId]: payload.subTasks,
    },
  }));
});

export default tasksReducer;

import { createReducer } from '@reduxjs/toolkit';
import { tasksSetAction, tasksSetFoundAction, tasksResetFoundAction } from './actions';

const initialTasksState = {
  tasksList: [],
  foundTasksList: [],
};

const tasksReducer = createReducer(initialTasksState, builder => {
  builder
    .addCase(tasksSetAction, (state, { payload }) => ({
      ...state,
      tasksList: payload,
    }))
    .addCase(tasksSetFoundAction, (state, { payload: foundTasksList }) => ({
      ...state,
      foundTasksList,
    }))
    .addCase(tasksResetFoundAction, state => ({
      ...state,
      foundTasksList: [],
    }));
});

export default tasksReducer;

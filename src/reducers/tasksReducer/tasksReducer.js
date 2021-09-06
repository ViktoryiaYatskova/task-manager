import { createReducer } from '@reduxjs/toolkit';
import { tasksSetAction } from './actions'

const initialTasksState = {
  tasksList: [],
};

const tasksReducer = createReducer(initialTasksState, (builder) => {
  builder.addCase(tasksSetAction, (state, { payload }) => ({
    ...state,
    tasksList: payload,
  }));
});

export default tasksReducer;
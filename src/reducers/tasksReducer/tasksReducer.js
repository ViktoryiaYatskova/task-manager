import { createReducer } from '@reduxjs/toolkit';
import { tasksSet } from './actions'

const initialTasksState = {
  tasksList: [],
};

const tasksReducer = createReducer(initialTasksState, (builder) => {
  builder.addCase(tasksSet, (state, { payload }) => ({
    ...state,
    tasksList: payload,
  }));
});

export default tasksReducer;
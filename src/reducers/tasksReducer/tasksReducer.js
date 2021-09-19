import { createReducer } from '@reduxjs/toolkit';
import { removeById } from 'helpers/genericHelpers';
import {
  tasksSetAction,
  tasksSetFoundAction,
  tasksResetFoundAction,
  taskDeleteSucceedAction,
} from './actions';

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
    }))
    .addCase(taskDeleteSucceedAction, (state, { payload: removedTaskId }) => ({
      ...state,
      tasksList: removeById(state.tasksList, removedTaskId),
      foundTasksList: removeById(state.foundTasksList, removedTaskId),
    }));
});

export default tasksReducer;

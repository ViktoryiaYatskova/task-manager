import { createReducer } from '@reduxjs/toolkit';
import {
  tasksSetAction,
  tasksSetFoundAction,
  subTasksSetAction,
  subTasksSetFoundAction,
  subTaskDeleteAction,
} from './actions';

const initialTasksState = {
  tasksList: [],
  foundTasksList: [],

  allSubTasks: {},
  foundSubTasksList: [],
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
    }));
  // // reset invalid search data
  // .addCase(subTaskDeleteAction, (state) => ({
  //   ...state,
  //   foundTasksList: [],
  // }));

  // SubTasks actins
  builder
    .addCase(subTasksSetAction, (state, { payload }) => ({
      ...state,
      allSubTasks: {
        ...state.allSubTasks,
        [payload.taskId]: payload.subTasks,
      },
    }))
    .addCase(subTasksSetFoundAction, (state, { payload: foundSubTasksList }) => ({
      ...state,
      foundSubTasksList,
    }))
    // reset invalid search data
    .addCase(subTaskDeleteAction, state => ({
      ...state,
      foundTasksList: [],
      foundSubTasksList: [],
    }));
});

export default tasksReducer;

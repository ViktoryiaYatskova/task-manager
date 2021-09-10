import { createReducer } from '@reduxjs/toolkit';
import { subTasksSetAction, subTasksSetFoundAction, subTasksResetFoundAction } from './actions';

const initialTasksState = {
  allSubTasks: {},
  foundSubTasksList: [],
};

const subTasksReducer = createReducer(initialTasksState, builder => {
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
    .addCase(subTasksResetFoundAction, state => ({
      ...state,
      foundSubTasksList: [],
    }));
});

export default subTasksReducer;

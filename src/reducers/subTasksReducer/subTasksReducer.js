import { createReducer } from '@reduxjs/toolkit';
import { removeById } from 'helpers/genericHelpers';
import {
  subTasksSetAction,
  subTasksSetFoundAction,
  subTasksResetFoundAction,
  subTaskDeleteSucceedAction,
} from './actions';

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
    }))
    .addCase(
      subTaskDeleteSucceedAction,
      (state, { payload: { id: removedSubTaskId, taskId } }) => ({
        ...state,
        foundSubTasksList: removeById(state.foundSubTasksList, removedSubTaskId),
        allSubTasks: {
          ...state.allSubTasks,
          [taskId]: removeById(state.allSubTasks[taskId], removedSubTaskId),
        },
      }),
    );
});

export default subTasksReducer;

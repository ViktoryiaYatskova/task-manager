import { createReducer } from '@reduxjs/toolkit';
import { uniques } from 'helpers/subTaskHelpers';
import { setAppModeAction } from 'reducers/appReducer/actions';
import {
  subTasksSetAction,
  subTasksSetFoundAction,
  subTasksResetFoundAction,
  searchSubTasksByLabelAction,
} from './actions';

const initialTasksState = {
  allSubTasks: {},
  foundSubTasksList: [],
  filters: [],
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
    .addCase(searchSubTasksByLabelAction, (state, { payload: label }) => ({
      ...state,
      filters: uniques(...state.filters, label),
    }))
    // TODO: get rid of alien action
    .addCase(setAppModeAction, (state, { payload: isSearchMode }) => ({
      ...state,
      filters: isSearchMode ? state.filters : [],
      // Temporary workaround : collapse all subtasks on searchMode
      // TODO: refetch only visible in regular mode subtasks on delete subtask
      allSubTasks: isSearchMode ? state.allSubTasks : {},
    }));
});

export default subTasksReducer;

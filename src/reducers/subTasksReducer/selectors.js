import { createSelector } from '@reduxjs/toolkit';
import { isSearchModeSelector } from 'reducers/appReducer/selectors';

export const foundSubTasksSelector = state => state.subTasks.foundSubTasksList;
export const subTaskFiltersSelector = state => state.subTasks.filters;

export const foundSubTasksByTaskIdSelectorFactory = taskId =>
  createSelector(foundSubTasksSelector, foundSubTasksList =>
    foundSubTasksList.filter(subTask => subTask.taskId === taskId),
  );

export const subTasksByTaskIdSelector = (state, taskId) => state.subTasks.allSubTasks[taskId] || [];

export const visibleSubTasksByTaskIdSelectorFactory = taskId =>
  createSelector(
    isSearchModeSelector,
    // TODO: optimize, as this call produces new function each time
    foundSubTasksByTaskIdSelectorFactory(taskId),
    state => subTasksByTaskIdSelector(state, taskId),
    (isSearchMode, foundSubTasks, subTasks) => (isSearchMode ? foundSubTasks : subTasks),
  );

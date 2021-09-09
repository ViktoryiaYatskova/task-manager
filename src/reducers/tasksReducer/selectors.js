import { createSelector } from '@reduxjs/toolkit';
import { isSearchModeSelector } from 'reducers/appReducer/selectors';

export const tasksListSelector = state => state.tasks.tasksList;
export const tasksByIdSelector = (state, taskId) =>
  state.tasks.tasksList.find(task => task.id === taskId);

export const foundTasksSelector = state => state.tasks.foundTasksList;

export const foundSubTasksSelector = state => state.tasks.foundSubTasksList;

export const foundSubTasksByTaskIdSelectorFactory = taskId =>
  createSelector(foundSubTasksSelector, foundSubTasksList =>
    foundSubTasksList.filter(subTask => subTask.taskId === taskId),
  );

export const subTasksByTaskIdSelector = (state, taskId) => state.tasks.allSubTasks[taskId] || [];

export const visibleSubTasksByTaskIdSelectorFactory = taskId =>
  createSelector(
    isSearchModeSelector,
    // TODO: optimize, as this call produces new function each time
    foundSubTasksByTaskIdSelectorFactory(taskId),
    state => subTasksByTaskIdSelector(state, taskId),
    (isSearchMode, foundSubTasks, subTasks) => (isSearchMode ? foundSubTasks : subTasks),
  );

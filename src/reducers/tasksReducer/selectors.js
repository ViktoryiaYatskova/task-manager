import { createSelector } from '@reduxjs/toolkit';
import { isSearchModeSelector } from 'reducers/appReducer/selectors';
import { foundSubTasksSelector } from 'reducers/subTasksReducer/selectors';
import { getFoundTasks } from 'helpers/tasksHelpers';

export const tasksListSelector = state => state.tasks.tasksList;

export const tasksByIdSelector = (state, taskId) =>
  state.tasks.tasksList.find(task => task.id === taskId);

export const foundTasksSelector = state => state.tasks.foundTasksList;

export const visibleTasksSelector = createSelector(
  isSearchModeSelector,
  tasksListSelector,
  foundTasksSelector,
  foundSubTasksSelector,
  (isSearchMode, tasksList, foundTasksList, foundSubTasks) =>
    isSearchMode
      ? // TODO: consider optimization of heavy operation below
        getFoundTasks(tasksList, foundSubTasks, foundTasksList)
      : tasksList,
);

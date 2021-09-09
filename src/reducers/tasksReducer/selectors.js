import { createSelector } from '@reduxjs/toolkit';
import logError from 'utils/logger';

export const tasksListSelector = state => state.tasks.tasksList;
export const tasksByIdSelector = (state, taskId) =>
  state.tasks.tasksList.find(task => task.id === taskId);

const wrapInDebugger = (f) => (...args) => {
  // eslint-disable-next-line no-debugger
  try {
    const res = f(...args);
    console.log(f, res);
    return res;
  } catch(e) {
    // logError(e);
    // eslint-disable-next-line no-debugger
    debugger;
  }
};

export const foundTasksSelector = wrapInDebugger(state => state.tasks.foundTasksList);

export const foundSubTasksSelector = wrapInDebugger(state => state.tasks.foundSubTasksList);
const map = {};

export const foundSubTasksByTaskIdSelectorFactory = wrapInDebugger((taskId) => {
  const result = createSelector(
    foundSubTasksSelector,
    () => taskId,
    (foundSubTasksList) => foundSubTasksList.filter((subTask) => subTask.taskId === taskId),
  );

  map[taskId] = map[taskId] || new Set();
  map[taskId].add(result);
  console.log(map, map[taskId].size);

  return result;
})

export const subTasksByTaskIdSelector = (state, taskId) => state.tasks.allSubTasks[taskId] || [];

// const subTasks = useSelector(state => subTasksByTaskIdSelector(state, taskId));
// const foundSubTasks = useSelector(state => foundSubTasksByTaskIdSelector(state, taskId));
// const isSearchMode = useSelector(isSearchModeSelector);

export const visibleSubTasksByTaskIdSelectorFactory = (isSearchMode, taskId) => 
  createSelector(
    // TODO: optimize, as this call produces new function each time
    wrapInDebugger(foundSubTasksByTaskIdSelectorFactory(taskId)),
    wrapInDebugger((state) => subTasksByTaskIdSelector(state, taskId)),
    wrapInDebugger((foundSubTasks, subTasks) => { 
      debugger; 
      
      return (isSearchMode ? foundSubTasks : subTasks); 
    }),
  );
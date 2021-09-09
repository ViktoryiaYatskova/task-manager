export const tasksListSelector = state => state.tasks.tasksList;
export const tasksByIdSelector = (state, taskId) =>
  state.tasks.tasksList.find(task => task.id === taskId);
export const foundTasksSelector = state => state.tasks.foundTasksList;

export const foundSubTasksSelector = state => state.tasks.foundSubTasksList;
export const subTasksByTaskIdSelector = (state, taskId) => state.tasks.allSubTasks[taskId] || [];

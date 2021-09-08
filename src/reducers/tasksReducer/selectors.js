export const tasksListSelector = state => state.tasks.tasksList;

export const subTasksSelector = (state, taskId) => state.tasks.allSubTasks[taskId] || [];

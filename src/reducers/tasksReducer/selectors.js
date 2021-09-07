export const tasksListSelector = state => state.tasks.tasksList;

export const subTasksSelector = (state, id) => state.tasks.allSubTasks[id];

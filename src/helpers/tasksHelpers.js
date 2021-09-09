export const formatTimeForRender = timeInMilliseconds => {
  const date = new Date(timeInMilliseconds);

  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export const isAnySubTaskOfTask = (subTasks, taskId) =>
  subTasks.find(subTask => subTask.taskId === taskId);

export const getTasksOfSubTasks = (allTasks, subTasks) =>
  allTasks.filter(task => isAnySubTaskOfTask(subTasks, task.id));

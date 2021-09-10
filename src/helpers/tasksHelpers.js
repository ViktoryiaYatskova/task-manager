export const formatTimeForRender = timeInMilliseconds => {
  const date = new Date(timeInMilliseconds);

  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const isAnySubTaskOfTask = (subTasks, taskId) =>
  subTasks.find(subTask => subTask.taskId === taskId);

// TODO: Consider using lodash for such operations
const searchByProp = (array, searchItem, property) =>
  array.find(item => item[property] === searchItem[property]);

export const getFoundTasks = (allTasks, subTasks, foundTasks) => {
  const isFoundTask = task => searchByProp(foundTasks, task, 'id');

  return allTasks.filter(task => isFoundTask(task.id) || isAnySubTaskOfTask(subTasks, task.id));
};

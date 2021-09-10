export const formatTimeForRender = timeInMilliseconds => {
  const date = new Date(timeInMilliseconds);

  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const isTaskOfSomeSubTask = (subTasks, taskId) =>
  subTasks.some(subTask => subTask.taskId === taskId);

// TODO: Consider using lodash for such operations
const searchByProp = (array, searchItem, property) =>
  array.find(item => item[property] === searchItem[property]);

const isFoundTask = (task, foundTasks) => !!searchByProp(foundTasks, task, 'id');

export const getFoundTasks = (allTasks, subTasks, foundTasks) =>
  allTasks.filter(task => isFoundTask(task, foundTasks) || isTaskOfSomeSubTask(subTasks, task.id));

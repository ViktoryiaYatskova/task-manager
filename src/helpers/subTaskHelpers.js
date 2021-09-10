export const isLastSubTask = (subTaskId, subTasksList) =>
  !subTasksList.length ||
  (subTasksList.length === 1 && subTasksList.some(({ id }) => id === subTaskId));

export const uniques = (...array) => [...new Set(array)];

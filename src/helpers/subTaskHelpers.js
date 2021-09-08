export const isLastSubTask = (subTaskId, subTasksList) =>
  !subTasksList.length ||
  (subTasksList.length === 1 && !!subTasksList.find(({ id }) => id === subTaskId));
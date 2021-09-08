export const formatTimeForRender = timeInMilliseconds => {
  const date = new Date(timeInMilliseconds);

  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

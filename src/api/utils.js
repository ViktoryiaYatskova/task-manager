export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const logRequest =
  (requestName, func) =>
  (...args) => {
    const result = func(...args);

    // eslint-disable-next-line no-console
    console.log('Request', requestName, 'args', args, 'result', result);

    return result;
  };

// eslint-disable-next-line no-console
const logFunction = console.error; // window.alert  - for development from Tablet purpose only

export const logError = (...args) => {
  logFunction(args.join(' '));
};

export const logRequest =
  (requestName, func) =>
  (...args) => {
    const result = func(...args);

    // eslint-disable-next-line no-console
    console.log('Request', requestName, 'args', args, 'result', result);

    return result;
  };

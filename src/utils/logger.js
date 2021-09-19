// eslint-disable-next-line no-console
const logFunction = window.alert; // console.error;   - for development from Tablet purpose only

export const logError = (...args) => {
  logFunction(args.join(' '));
};

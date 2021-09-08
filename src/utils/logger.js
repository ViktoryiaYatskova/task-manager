const logFunction = window.alert; // console.error (for development from Tablet purpose only)

const logError = (...args) => {
  logFunction(args.join(' '));
};

export default logError;

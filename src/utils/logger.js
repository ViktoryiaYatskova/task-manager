const logFunction = window.alert; // console.error

const logError = (...args) => {
  logFunction(args.join(' '));
};

export default logError;

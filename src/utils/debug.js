export const countFuncCallForUniqueValues =
  func =>
  (...args) => {
    const map = new Map();
    const result = func(...args);
    const argsHash = args.map(a => JSON.stringify(a)).join('-');

    map[argsHash] = map[argsHash] || new Set();
    map[argsHash].add(result);

    console.log(func, map, map[argsHash].size);

    return result;
  };

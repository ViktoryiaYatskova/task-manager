export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const mapOmitEmpty = (array, callback) =>
  array.reduce((newArray, element, index) => {
    const newElement = callback(element, index);

    // filter null and undefined:
    // eslint-disable-next-line eqeqeq
    if (newElement != undefined) newArray.push(newElement);

    return newArray;
  }, []);

export const logRequest =
  (requestName, func) =>
  (...args) => {
    const result = func(...args);

    // eslint-disable-next-line no-console
    console.log('Request', requestName, 'args', args, 'result', result);

    return result;
  };

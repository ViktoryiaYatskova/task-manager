export default callback =>
  (...args) =>
    new Promise(resolve => setTimeout(() => resolve(callback(...args)), 1500))

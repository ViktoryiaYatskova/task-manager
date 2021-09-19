export const removeById = (array, id) => array.filter(item => item.id !== id);

export const uniques = (...array) => [...new Set(array)];

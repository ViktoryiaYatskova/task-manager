import { useState } from 'react';
import { SortTypes } from 'constants/tasksConstants';

const comparatorsBySortType = {
  [SortTypes.CREATE_TIME]: (a, b) => a.createTime - b.createTime,
  [SortTypes.TITLE]: (a, b) => (a.title < b.title ? -1 : 1),
};

const sortItemsImmutably = (items, sortType) => {
  const sortedItems = [...items];

  sortedItems.sort(comparatorsBySortType[sortType]);

  return sortedItems;
};

const useSorting = items => {
  const [sortType, setSortType] = useState(SortTypes.CREATE_TIME);
  const sortedItems = sortItemsImmutably(items, sortType);

  return { sortedItems, sortBy: setSortType };
};

export default useSorting;

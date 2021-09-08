import React from 'react';
import { useSelector } from 'react-redux';
import Task from 'components/organisms/Task/Task';
import { List } from 'components/atoms';
import { SortTasksButtons } from 'components/molecules';
import { tasksListSelector } from 'reducers/tasksReducer/selectors';
import useSorting from './hooks/useSorting';

const TasksList = () => {
  const tasks = useSelector(tasksListSelector);
  const { sortedItems, sortBy } = useSorting(tasks);

  return (
    <>
      <SortTasksButtons sortBy={sortBy} />
      <List items={sortedItems} ItemComponent={Task} />
    </>
  );
};

export default TasksList;

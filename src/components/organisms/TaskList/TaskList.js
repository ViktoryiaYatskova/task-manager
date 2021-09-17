import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasksFetchAction } from 'reducers/tasksReducer/actions';
import Task from 'components/organisms/Task/Task';
import { List } from 'components/atoms';
import { SortTasksButtons } from 'components/molecules';
import { visibleTasksSelector } from 'reducers/tasksReducer/selectors';
import useSorting from './hooks/useSorting';

const TasksList = () => {
  const tasks = useSelector(visibleTasksSelector);
  const { sortedItems, sortBy } = useSorting(tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tasksFetchAction());
  }, []);

  return (
    <section>
      <SortTasksButtons sortBy={sortBy} />
      <List items={sortedItems} ItemComponent={Task} />
    </section>
  );
};

export default TasksList;

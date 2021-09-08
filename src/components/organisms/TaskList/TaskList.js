import React from 'react';
import { useSelector } from 'react-redux';
import Task from 'components/organisms/Task/Task';
import { List } from 'components/atoms';
import { tasksListSelector } from 'reducers/tasksReducer/selectors';

const TasksList = () => {
  const tasks = useSelector(tasksListSelector);

  return <List itemsSelector={tasks} ItemComponent={Task} />;
};

export default TasksList;

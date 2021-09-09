import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SubTask from 'components/molecules/SubTask/SubTask';
import { subTasksByTaskIdSelector } from 'reducers/tasksReducer/selectors';
import { List } from 'components/atoms';

const SubTasksList = ({ taskId }) => {
  const subTasks = useSelector(state => subTasksByTaskIdSelector(state, taskId));

  return <List items={subTasks} ItemComponent={SubTask} />;
};

SubTasksList.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default SubTasksList;

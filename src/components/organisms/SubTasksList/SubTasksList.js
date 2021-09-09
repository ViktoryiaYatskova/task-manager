import React from 'react';
import PropTypes from 'prop-types';
import { visibleSubTasksByTaskIdSelectorFactory } from 'reducers/tasksReducer/selectors';
import { useParametrizedSelector } from 'components/hooks/useParametrizedSelector';
import { List } from 'components/atoms';
import SubTask from 'components/molecules/SubTask/SubTask';

const SubTasksList = ({ taskId }) => {
  const subTasks = useParametrizedSelector(visibleSubTasksByTaskIdSelectorFactory, [taskId]);

  return <List items={subTasks} ItemComponent={SubTask} />;
};

SubTasksList.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default SubTasksList;

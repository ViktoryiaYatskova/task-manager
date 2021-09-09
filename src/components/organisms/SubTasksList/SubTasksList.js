import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { visibleSubTasksByTaskIdSelectorFactory } from 'reducers/tasksReducer/selectors';
import { isSearchModeSelector } from 'reducers/appReducer/selectors';
import { useParametrizedSelector } from 'components/hooks/useParametrizedSelector';
import { List } from 'components/atoms';
import SubTask from 'components/molecules/SubTask/SubTask';

const SubTasksList = ({ taskId }) => {
  const isSearchMode = useSelector(isSearchModeSelector);
  const subTasks = useParametrizedSelector(visibleSubTasksByTaskIdSelectorFactory, [
    isSearchMode,
    taskId,
  ]);

  return <List items={subTasks} ItemComponent={SubTask} />;
};

SubTasksList.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default SubTasksList;

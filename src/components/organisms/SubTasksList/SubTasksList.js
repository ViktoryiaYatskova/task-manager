import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { visibleSubTasksByTaskIdSelectorFactory } from 'reducers/subTasksReducer/selectors';
import { useParametrizedSelector } from 'components/hooks/useParametrizedSelector';
import { List } from 'components/atoms';
import SubTask from 'components/molecules/SubTask/SubTask';
import { isSearchModeSelector } from 'reducers/appReducer/selectors';

const SubTasksList = ({ taskId, isExpanded: isExpandedByButton }) => {
  const isSearchMode = useSelector(isSearchModeSelector);
  const subTasks = useParametrizedSelector(visibleSubTasksByTaskIdSelectorFactory, [taskId]);
  const shouldShowList = isExpandedByButton || (isSearchMode && subTasks.length);

  return <List className={!shouldShowList && 'hidden'} items={subTasks} ItemComponent={SubTask} />;
};

SubTasksList.propTypes = {
  taskId: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default SubTasksList;

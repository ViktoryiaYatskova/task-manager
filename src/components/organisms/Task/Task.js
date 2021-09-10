import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MarkedText, ToggleButton } from 'components/atoms';
import { subTasksFetchAction } from 'reducers/subTasksReducer/actions';
import { isSearchModeSelector } from 'reducers/appReducer/selectors';
import SubTasksList from 'components/organisms/SubTasksList/SubTasksList';
import { formatTimeForRender } from 'helpers/tasksHelpers';
import { TaskWrapper, TaskName } from './Task.styles';

const Task = ({ title, id, createTime }) => {
  const isSearchMode = useSelector(isSearchModeSelector);
  const [isSubTasksListExpanded, setSubTasksListExpanded] = useState(false);
  const dispatch = useDispatch();
  const onToggleExpand = useCallback(
    isExpanded => {
      if (isExpanded) {
        dispatch(subTasksFetchAction(id));
      }
      setSubTasksListExpanded(isExpanded);
    },
    [id, dispatch],
  );

  return (
    <>
      <TaskWrapper>
        <TaskName>
          <MarkedText>{title}</MarkedText>
        </TaskName>
        <span>{formatTimeForRender(createTime)}</span>
        {!isSearchMode && (
          <ToggleButton onToggle={onToggleExpand} onTitle="Collapse" offTitle="Expand" />
        )}
      </TaskWrapper>
      <SubTasksList taskId={id} isExpanded={isSubTasksListExpanded} />
    </>
  );
};

export const TaskShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createTime: PropTypes.number.isRequired,
};

Task.propTypes = TaskShape;

export default Task;

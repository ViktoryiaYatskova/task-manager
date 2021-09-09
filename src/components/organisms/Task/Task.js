import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, MarkedText } from 'components/atoms';
import { subTasksFetchAction } from 'reducers/subTasksReducer/actions';
import SubTasksList from 'components/organisms/SubTasksList/SubTasksList';
import { formatTimeForRender } from 'helpers/tasksHelpers';
import { TaskWrapper, TaskName } from './Task.styles';

const Task = ({ title, id, createTime }) => {
  const dispatch = useDispatch();
  const onViewSubtasksClick = useCallback(() => dispatch(subTasksFetchAction(id)), [id, dispatch]);

  return (
    <>
      <TaskWrapper>
        <TaskName>
          <MarkedText>{title}</MarkedText>
        </TaskName>
        <span>{formatTimeForRender(createTime)}</span>
        <Button onClick={onViewSubtasksClick}>Expand</Button>
      </TaskWrapper>
      <SubTasksList taskId={id} />
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

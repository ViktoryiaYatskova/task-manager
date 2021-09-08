import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'components/atoms';
import { subTasksFetchAction } from 'reducers/tasksReducer/actions';
import SubTasksList from 'components/organisms/SubTasksList/SubTasksList';

const Task = ({ title, id }) => {
  const dispatch = useDispatch();
  const onViewSubtasksClick = useCallback(() => dispatch(subTasksFetchAction(id)), [id]);

  return (
    <>
      <span>{title}</span>
      <Button onClick={onViewSubtasksClick}>View Subtasks</Button>
      <SubTasksList taskId={id} />
    </>
  );
};

export const TaskShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Task.propTypes = TaskShape;

export default Task;

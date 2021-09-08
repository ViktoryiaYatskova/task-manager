import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'components/atoms';
import { subTasksFetchAction } from 'reducers/tasksReducer/actions';
import SubTasksList from 'components/organisms/SubTasksList/SubTasksList';

const Task = ({ title, id }) => {
  const dispatch = useDispatch();
  const onFetchSubtasks = useCallback(() => {
    dispatch(subTasksFetchAction(id));
  }, [id, dispatch]);

  return (
    <>
      <span>{title}</span>
      <Button onClick={onFetchSubtasks}>View Subtasks</Button>
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

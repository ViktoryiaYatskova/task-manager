import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/atoms';
import { subTasksFetchAction } from 'reducers/tasksReducer/actions';
import SubTasksList from 'components/organisms/SubTasksList/SubTasksList';
import { subTasksSelector } from 'reducers/tasksReducer/selectors';

const Task = ({ title, id }) => {
  const dispatch = useDispatch();
  const onFetchSubtasks = useCallback(() => {
    dispatch(subTasksFetchAction(id));
  }, [id, dispatch]);
  const subTasks = useSelector(state => subTasksSelector(state, id));

  return (
    <>
      <span>{title}</span>
      <Button onClick={onFetchSubtasks}>View Subtasks</Button>
      <SubTasksList subTasks={subTasks} />
    </>
  );
};

export const TaskShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Task.propTypes = TaskShape;

export default Task;

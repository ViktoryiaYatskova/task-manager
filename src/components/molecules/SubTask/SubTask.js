import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms';
import { subTaskDeleteAction } from 'reducers/tasksReducer/actions';

const SubTask = ({ id, title, labels, taskId }) => {
  const dispatch = useDispatch();
  const onRemoveClick = useCallback(
    () => dispatch(subTaskDeleteAction({ id, taskId })),
    [dispatch, id, taskId],
  );

  return (
    <>
      <span id={id}>{title}</span>
      <Button onClick={onRemoveClick}>Remove</Button>
      <ul>
        {labels.map(label => (
          <li key={label}>#{label}</li>
        ))}
      </ul>
    </>
  );
};

SubTask.defaultProps = {
  labels: [],
};

export const SubTaskShape = {
  id: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
};

SubTask.propTypes = SubTaskShape;

export default SubTask;

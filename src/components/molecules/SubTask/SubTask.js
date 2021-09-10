import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Checkbox as RemoveTaskCheckbox, MarkedText } from 'components/atoms';
import { LabelsList } from 'components/molecules';
import { subTaskDeleteAction } from 'reducers/subTasksReducer/actions';

const SubTask = ({ id, title, labels, taskId }) => {
  const dispatch = useDispatch();
  const onRemoveClick = useCallback(
    () => dispatch(subTaskDeleteAction({ id, taskId })),
    [dispatch, id, taskId],
  );

  return (
    <span>
      <RemoveTaskCheckbox onCheck={onRemoveClick} isUncheckable />
      <span id={id}>
        <MarkedText>{title}</MarkedText>
      </span>
      <LabelsList labels={labels} />
    </span>
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

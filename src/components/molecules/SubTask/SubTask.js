import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { subTaskDeleteAction } from 'reducers/tasksReducer/actions';
import { Label, LabelsList, RemoveButton } from './SubTask.styles';

const SubTask = ({ id, title, labels, taskId }) => {
  const dispatch = useDispatch();
  // I'd rather remove useCallback, as it doesn't make here an optimization: https://kentcdodds.com/blog/usememo-and-usecallback
  // but I keed it, since it's an configured code-style by eslint-rule: react-perf/jsx-no-new-function-as-prop
  const onRemoveClick = useCallback(
    () => dispatch(subTaskDeleteAction({ id, taskId })),
    [dispatch, id, taskId],
  );

  return (
    <>
      <RemoveButton onClick={onRemoveClick} />
      <span id={id}>{title}</span>
      <LabelsList>
        {labels.map(label => (
          <Label key={label} className="label">
            #{label}
          </Label>
        ))}
      </LabelsList>
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

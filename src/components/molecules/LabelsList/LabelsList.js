import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { searchSubTasksByLabelAction } from 'reducers/subTasksReducer/actions';
import { LabelsListContainer, LabelStyled, LabelListItem } from './LabelsList.styles';

// TODO: move to atoms
const Label = ({ label }) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    () => dispatch(searchSubTasksByLabelAction(label)),
    [dispatch, label],
  );

  return (
    <LabelStyled className="label purple-button" onClick={handleClick}>
      #{label}
    </LabelStyled>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
};

const LabelsList = ({ labels }) => (
  <LabelsListContainer>
    {labels.map(label => (
      <LabelListItem key={label}>
        <Label label={label} />
      </LabelListItem>
    ))}
  </LabelsListContainer>
);

LabelsList.defaultProps = {
  labels: [],
};

LabelsList.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default LabelsList;

import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchSubTasksByLabelAction } from 'reducers/subTasksReducer/actions';
import { LabelStyled } from './Label.styles';

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

export default Label;

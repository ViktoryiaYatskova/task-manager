import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { LabelsListContainer, LabelStyled } from './LabelsList.styles';

// TODO: move to atoms
const Label = ({ label, onClick }) => {
  const handleClick = useCallback(() => onClick(label), [onClick, label]);

  return (
    <LabelStyled className="label" onClick={handleClick}>
      #{label}
    </LabelStyled>
  );
};

Label.defaultProps = {
  onClick: () => null,
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const LabelsList = ({ labels, onLabelClick }) => (
  <LabelsListContainer>
    {labels.map(label => (
      <Label key={label} label={label} onClick={onLabelClick} />
    ))}
  </LabelsListContainer>
);

LabelsList.defaultProps = {
  labels: [],
  onLabelClick: () => null,
};

LabelsList.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  onLabelClick: PropTypes.func,
};

export default LabelsList;

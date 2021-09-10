import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms';
import { LabelsListContainer, LabelListItem } from './LabelsList.styles';

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

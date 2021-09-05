import React from 'react'
import PropTypes from 'prop-types';

const LabelsInput = ({ labels }) => {
  return (<div>
    {labels.map(label => <span>#{label}</span>)}
  </div>);
};

LabelsInput.defaultProps = {
  labels: [],
};

LabelsInput.PropTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default LabelsInput;
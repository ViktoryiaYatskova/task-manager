import React, { useCallback } from 'react'
import PropTypes from 'prop-types';
import TextInput from '../../atoms/TextInput/TextInput'

const LabelsInput = ({ labels, onValueChange }) => {
  const handleLabelsUpdate = useCallback((rawLabelsString) => {
    const formattedLabels = rawLabelsString.split(',').map(label => label.trim(' #'));
    onValueChange(formattedLabels);
  }, [onValueChange]);

  return (
    <>
      <TextInput placeholder='label1, label2, ...' onValueChange={handleLabelsUpdate} />
      <ul>
        {labels.map(label => <li>#{label}</li>)}
      </ul>
    </>
  );
};

LabelsInput.defaultProps = {
  labels: [],
};

LabelsInput.PropTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default LabelsInput;
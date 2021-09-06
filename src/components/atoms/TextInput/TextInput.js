import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ value: initialValue, placeholder, onValueChange }) => {
  const [value, setValue] = useState(initialValue);
  const handleTextInputChange = useCallback(
    event => {
      setValue(event.target.value);
      onValueChange(event.target.value);
    },
    [onValueChange],
  );

  return (
    <input type="text" placeholder={placeholder} value={value} onChange={handleTextInputChange} />
  );
};

TextInput.defaultProps = {
  value: '',
  placeholder: '',
};

TextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
};

export default TextInput;

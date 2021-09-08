import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from './TextInput.styles';

const TextInput = ({ value: initialValue, placeholder, onValueChange }) => {
  const [value, setValue] = useState(initialValue);
  const handleTextInputChange = useCallback(
    event => {
      setValue(event.target.value);
      onValueChange(event.target.value);
    },
    [onValueChange],
  );

  // allow rewriting title by parent: subscribe on its change
  useEffect(() => setValue(initialValue), [initialValue]);

  return <Input placeholder={placeholder} value={value} onChange={handleTextInputChange} />;
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

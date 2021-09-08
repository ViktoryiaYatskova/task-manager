import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from './TextInput.styles';

const TextInput = ({ value: initialValue, placeholder, onValueChange }) => {
  const [value, setValue] = useState(initialValue);
  // I'd rather remove useCallback, as it doesn't make here an optimization: https://kentcdodds.com/blog/usememo-and-usecallback
  // but I keed it, since it's an configured code-style by eslint-rule: react-perf/jsx-no-new-function-as-prop
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

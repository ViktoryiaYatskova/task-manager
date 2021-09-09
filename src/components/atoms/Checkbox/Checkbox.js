import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox as CheckboxStyled } from './Checkbox.styles';

const Checkbox = ({ onCheck, isUncheckable }) => {
  const [isChecked, setChecked] = useState(false);
  // I'd rather remove useCallback, as it doesn't make here an optimization: https://kentcdodds.com/blog/usememo-and-usecallback
  // but I keed it, since it's an configured code-style by eslint-rule: react-perf/jsx-no-new-function-as-prop
  const onCheckClick = useCallback(() => {
    if (!isChecked) onCheck();
    setChecked(checkedState => (isUncheckable ? true : !checkedState));
  }, [onCheck, isChecked, isUncheckable]);

  return <CheckboxStyled onClick={onCheckClick} checked={isChecked} />;
};

Checkbox.defaultProps = {
  isUncheckable: false,
};

Checkbox.propTypes = {
  onCheck: PropTypes.func.isRequired,
  isUncheckable: PropTypes.bool,
};

export default Checkbox;

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox as CheckboxStyled } from './Checkbox.styles';

const Checkbox = ({ onCheck, isUncheckable }) => {
  const [isChecked, setChecked] = useState(false);

  // UseCallback is needed, since it uses an closure value
  const onCheckClick = useCallback(() => {
    if (!isChecked) onCheck();
    setChecked(checkedState => (isUncheckable ? true : !checkedState));
  }, [onCheck, isChecked, isUncheckable]);

  return <CheckboxStyled onChange={onCheckClick} checked={isChecked} />;
};

Checkbox.defaultProps = {
  isUncheckable: false,
};

Checkbox.propTypes = {
  onCheck: PropTypes.func.isRequired,
  isUncheckable: PropTypes.bool,
};

export default Checkbox;

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms';

const ToggleButton = ({ onToggle, onTitle, offTitle }) => {
  const [isToggled, setState] = useState(false);
  const toggle = useCallback(() => {
    setState(isOn => !isOn);
    onToggle(!isToggled);
  }, [isToggled, onToggle]);

  return <Button onClick={toggle}>{isToggled ? onTitle : offTitle}</Button>;
};

ToggleButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onTitle: PropTypes.string.isRequired,
  offTitle: PropTypes.string.isRequired,
};

export default ToggleButton;

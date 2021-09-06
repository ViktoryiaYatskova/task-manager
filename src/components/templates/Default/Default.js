import React from 'react';
import PropTypes from 'prop-types';
import { BorderedCenterArea } from './Default.styles';

const Default = ({ children }) => <BorderedCenterArea>{children}</BorderedCenterArea>;

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;

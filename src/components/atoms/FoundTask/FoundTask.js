import React from 'react';
import PropTypes from 'prop-types';

const FoundTask = ({ title }) => (
  <>
    <div>{title}</div>
  </>
);

FoundTask.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FoundTask;

import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ title }) => (
  <>
    <span>{title}</span>
  </>
);

export const TaskShape = {
  // id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Task.propTypes = TaskShape;

export default Task;

import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ title, labels = [] }) => (
  <li>{title}: #{labels.join(', #')}</li>
);

export const TaskShape = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
};

Task.propTypes = TaskShape;
Task.defaultProps = {
  labels: [],
};

export default Task;
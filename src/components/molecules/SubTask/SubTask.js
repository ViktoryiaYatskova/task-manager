import React from 'react';
import PropTypes from 'prop-types';

const SubTask = ({ id, title, labels }) => (
  <>
    <span id={id}>{title}</span>
    <ul>
      {labels.map(label => (
        <li key={label}>#{label}</li>
      ))}
    </ul>
  </>
);

SubTask.defaultProps = {
  labels: [],
};

export const SubTaskShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
};

SubTask.propTypes = SubTaskShape;

export default SubTask;

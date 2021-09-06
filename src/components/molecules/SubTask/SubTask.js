import React from 'react';
import PropTypes from 'prop-types';

const SubTask = ({ id, title, labels }) => {
  return (
    <>
      <span>{title}</span>
      <ul>
        {labels.map(label => (
          <li>#{label}</li>
        ))}
      </ul>
    </>
  );
};

SubTask.defaultProps = {
  labels: [],
};

SubTask.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default SubTask;

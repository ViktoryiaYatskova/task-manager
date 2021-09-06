import React from 'react';
import PropTypes from 'prop-types';
import SubTask, { SubTaskShape } from '../../molecules/SubTask/SubTask';

const SubTasksList = ({ subTasks }) => (
  <ul>
    {subTasks.map(subTask => (
      <li key={subTask.id}>
        <SubTask {...subTask} />
      </li>
    ))}
  </ul>
);

SubTasksList.defaultProps = {
  subTasks: [],
};

SubTasksList.propTypes = {
  subTasks: PropTypes.arrayOf(SubTaskShape),
};

export default SubTasksList;

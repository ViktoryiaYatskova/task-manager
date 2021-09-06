import React from 'react';
import PropTypes from 'prop-types';
import { Task } from 'components/molecules';
import { TaskShape } from '../../molecules/Task/Task';
import { List } from './TaskList.styles';

const TasksList = ({ tasks }) => (
  <List>
    {tasks.map(task => (
      <li key={task.id}>
        <Task {...task} />
      </li>
    ))}
  </List>
);

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(TaskShape)).isRequired,
};

export default TasksList;

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { tasksByIdSelector } from 'reducers/tasksReducer/selectors';
import { SubTaskTitle, TaskTitle } from './FoundSubTask.styles';

const FoundSubTask = ({ title, taskId }) => {
  const task = useSelector(state => tasksByIdSelector(state, taskId));

  return (
    <section>
      <TaskTitle>{task.title}: </TaskTitle>
      <SubTaskTitle>{title}</SubTaskTitle>
    </section>
  );
};

FoundSubTask.propTypes = {
  taskId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FoundSubTask;

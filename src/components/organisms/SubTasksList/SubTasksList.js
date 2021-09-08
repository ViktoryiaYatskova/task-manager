import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SubTask from 'components/molecules/SubTask/SubTask';
import { subTasksSelector } from 'reducers/tasksReducer/selectors';

const SubTasksList = ({ taskId }) => {
  const safeSubTasksSelector = useCallback(state => subTasksSelector(state, taskId), [taskId]);
  const subTasks = useSelector(safeSubTasksSelector);

  return (
    <ul>
      {subTasks.map(subTask => (
        <li key={subTask.id}>
          <SubTask {...subTask} />
        </li>
      ))}
    </ul>
  );
};

SubTasksList.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default SubTasksList;

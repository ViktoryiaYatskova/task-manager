import React from 'react';
import SubTask from '../../molecules/SubTask/SubTask';

const SubTasksList = ({ subTasks }) => {
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

export default SubTasksList;

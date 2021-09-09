import React from 'react';
import { useSelector } from 'react-redux';
import { List, FoundTask } from 'components/atoms';
import { foundTasksSelector } from 'reducers/tasksReducer/selectors';

const FoundTasksList = () => {
  const tasks = useSelector(foundTasksSelector);

  return (
    <>
      {tasks.length > 0 && <h3>Found tasks:</h3>}
      <List items={tasks} ItemComponent={FoundTask} />
    </>
  );
};

export default FoundTasksList;

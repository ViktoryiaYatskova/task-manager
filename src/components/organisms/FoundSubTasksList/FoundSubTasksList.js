import React from 'react';
import { useSelector } from 'react-redux';
import { foundSubTasksSelector } from 'reducers/subTasksReducer/selectors';
import { List } from 'components/atoms';
import FoundSubTask from 'components/molecules/FoundSubTask/FoundSubTask';

const FoundSubTasksList = () => {
  const foundSubTasks = useSelector(foundSubTasksSelector);

  return (
    <>
      {foundSubTasks.length > 0 && <h3>Found SubTasks:</h3>}
      <List items={foundSubTasks} ItemComponent={FoundSubTask} />
    </>
  );
};

export default FoundSubTasksList;

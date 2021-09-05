import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'components/atoms'
import { TaskList } from 'components/organisms';
import { tasksListSelector } from '../../reducers/tasksReducer/selectors'

const Tasks = () => {
  const tasks = useSelector(tasksListSelector);

  return (
    <div>
      <h1>Processes</h1>
      <TaskList tasks={tasks} />
      <Button>Create</Button>
    </div>
  )
}

export default Tasks

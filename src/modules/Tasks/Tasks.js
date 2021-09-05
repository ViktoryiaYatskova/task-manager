import React from 'react'
import { Button } from 'components/atoms'
import { TaskList } from 'components/organisms';

const Tasks = () => (
  <div>
    <h1>Processes</h1>
    <TaskList />
    <Button>Create</Button>
  </div>
)

export default Tasks

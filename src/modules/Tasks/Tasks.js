import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'components/atoms'
import { TaskList } from 'components/organisms';
import DefaultPageLayout from '../../components/templates/Default/Default'
import PageHeader from '../../components/atoms/PageHeader/PageHeader'
import { tasksListSelector } from '../../reducers/tasksReducer/selectors'

const TasksPage = () => {
  const tasks = useSelector(tasksListSelector);

  return (<DefaultPageLayout>
    <PageHeader/>
    <div>
      <TaskList tasks={tasks} />
      <Button>Create</Button>
    </div>
  </DefaultPageLayout>)
}

export default TasksPage;

import React from 'react'
import { useSelector } from 'react-redux'
import { TaskList } from 'components/organisms'
import DefaultPageLayout from '../../components/templates/Default/Default'
import PageHeader from '../../components/atoms/PageHeader/PageHeader'
import { tasksListSelector } from '../../reducers/tasksReducer/selectors'
import TaskForm from '../../components/organisms/TaskForm/TaskForm'

const TasksPage = () => {
  const tasks = useSelector(tasksListSelector);

  return (<DefaultPageLayout>
    <PageHeader/>
    <div>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  </DefaultPageLayout>)
}

export default TasksPage;

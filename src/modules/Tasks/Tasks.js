import React from 'react';
import { TaskList } from 'components/organisms';
import PageHeader from '../../components/atoms/PageHeader/PageHeader';
import TaskForm from '../../components/organisms/TaskForm/TaskForm';

const TasksPage = () => (
  <>
    <PageHeader />
    <main>
      <TaskForm />
      <TaskList />
    </main>
  </>
);

export default TasksPage;

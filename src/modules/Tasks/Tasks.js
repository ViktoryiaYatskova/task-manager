import React from 'react';
import { TaskList } from 'components/organisms';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import TaskForm from 'components/organisms/TaskForm/TaskForm';
import FoundItemsSection from 'components/organisms/FoundItemsSection/FoundItemsSection';

const TasksPage = () => (
  <>
    <PageHeader />
    <main>
      <TaskForm />
      <FoundItemsSection />
      <TaskList />
    </main>
  </>
);

export default TasksPage;

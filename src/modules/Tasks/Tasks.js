import React from 'react';
import { useSelector } from 'react-redux';
import { TaskList } from 'components/organisms';
import PageHeader from '../../components/atoms/PageHeader/PageHeader';
import { tasksListSelector } from '../../reducers/tasksReducer/selectors';
import TaskForm from '../../components/organisms/TaskForm/TaskForm';

const TasksPage = () => {
  const tasks = useSelector(tasksListSelector);

  return (
    <>
      <PageHeader />
      <main>
        <TaskForm />
        <TaskList tasks={tasks} />
      </main>
    </>
  );
};

export default TasksPage;

import Storage from 'utils/storage';
import delay from 'utils/delay';

export default delay(taskId => {
  const tasks = Storage.tasks.get();

  const allTasks = Storage.tasks.get();
  const targetTask = allTasks.find(task => task.id === taskId);

  if (!targetTask) {
    throw new Error(`Task ${taskId} wasn't found`);
  }

  Storage.tasks.set([...tasks.filter(task => task.id !== taskId)]);

  return targetTask;
});

import Storage from 'utils/storage';
import delay from 'utils/delay';

export default delay(title => {
  const allTasks = Storage.tasks.get();

  return allTasks.filter(task => task.includes(title));
});

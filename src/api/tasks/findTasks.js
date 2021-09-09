import Storage from 'utils/storage';
import delay from 'utils/delay';

export default delay(title => {
  const allTasks = Storage.tasks.get();
  const lowerCasedTitle = title.toLowerCase();

  return allTasks.filter(task => task.title.toLowerCase().includes(lowerCasedTitle));
});

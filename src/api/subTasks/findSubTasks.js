import Storage from 'utils/storage';
import delay from 'utils/delay';

export default delay(title => {
  const subTasks = Storage.subTasks.get();
  const lowerCasedTitle = title.toLowerCase();

  return subTasks.filter(subTask => subTask.title.toLowerCase().includes(lowerCasedTitle));
});

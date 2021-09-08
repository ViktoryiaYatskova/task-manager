import Storage from 'utils/storage';
import delay from 'utils/delay';

export default delay(title => {
  const subTasks = Storage.subTasks.get();

  return subTasks.filter(subTask => subTask.title.includes(title));
});

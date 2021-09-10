import Storage from 'utils/storage';
import delay from 'utils/delay';

export default delay(subTaskId => {
  const subTasks = Storage.subTasks.get();
  const subTask = subTasks.find(t => t.id === subTaskId);

  if (subTask) {
    Storage.subTasks.set(subTasks.filter(st => st.id !== subTaskId));

    return subTask;
  }

  throw new Error(`SubTask [${subTaskId}] not found`);
});

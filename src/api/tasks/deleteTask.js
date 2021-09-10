import Storage from 'utils/storage';
import delay from 'utils/delay';
import { logRequest } from 'utils/logger';

export default delay(
  logRequest('deleteTask', taskId => {
    const allTasks = Storage.tasks.get();
    const targetTask = allTasks.some(task => task.id === taskId);

    if (!targetTask) {
      throw new Error(`Task ${taskId} wasn't found`);
    }

    Storage.tasks.set([...allTasks.filter(task => task.id !== taskId)]);

    return targetTask;
  }),
);

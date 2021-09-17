import Storage from 'utils/storage';
import delay from 'utils/delay';
import { logRequest } from 'api/utils';

export default delay(
  logRequest('deleteSubTask', subTaskId => {
    const subTasks = Storage.subTasks.get();
    const subTask = subTasks.find(t => t.id === subTaskId);

    if (subTask) {
      Storage.subTasks.set(subTasks.filter(st => st.id !== subTaskId));

      return subTask;
    }

    throw new Error(`SubTask [${subTaskId}] not found`);
  }),
);

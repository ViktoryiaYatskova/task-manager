import Storage from 'utils/storage';
import delay from 'utils/delay';
import { logRequest, mapOmitEmpty } from 'api/utils';

export default delay(
  logRequest('findTasks', title => {
    const allTasks = Storage.tasks.get();
    const lowerCasedTitle = title.toLowerCase();

    return mapOmitEmpty(allTasks, task =>
      task.title.toLowerCase().includes(lowerCasedTitle) ? task.id : null,
    );
  }),
);

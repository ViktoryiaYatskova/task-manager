import Storage from 'utils/storage';
import delay from 'utils/delay';
import { logRequest } from '../../utils/logger';

export default delay(
  logRequest('findTasks', title => {
    const allTasks = Storage.tasks.get();
    const lowerCasedTitle = title.toLowerCase();

    return allTasks.filter(task => task.title.toLowerCase().includes(lowerCasedTitle));
  }),
);

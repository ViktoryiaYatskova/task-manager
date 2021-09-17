import Storage from 'utils/storage';
import delay from 'utils/delay';
import { logRequest } from 'api/utils';

export default delay(
  logRequest('findSubTasks', title => {
    const subTasks = Storage.subTasks.get();
    const lowerCasedTitle = title.toLowerCase();

    return subTasks.filter(subTask => subTask.title.toLowerCase().includes(lowerCasedTitle));
  }),
);

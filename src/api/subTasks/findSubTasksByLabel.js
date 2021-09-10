import Storage from 'utils/storage';
import delay from 'utils/delay';
import { logRequest } from 'utils/logger';

export default delay(
  logRequest('findSubTasksByLabel', searchLabels => {
    const subTasks = Storage.subTasks.get();

    return searchLabels.reduce((filteredSubTasks, searchLabel) => {
      const lowerCasedLabel = searchLabel.toLowerCase();

      return filteredSubTasks.filter(subTask =>
        subTask.labels.some(label => label.toLowerCase() === lowerCasedLabel),
      );
    }, subTasks);
  }),
);

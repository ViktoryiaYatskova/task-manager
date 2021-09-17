import Storage from 'utils/storage';
import delay from 'utils/delay';
import { logRequest, mapOmitEmpty } from 'api/utils';

export default delay(
  logRequest('findSubTasksByLabel', searchLabels => {
    const subTasks = Storage.subTasks.get();

    return searchLabels.reduce((filteredSubTasks, searchLabel) => {
      const lowerCasedLabel = searchLabel.toLowerCase();

      return mapOmitEmpty(filteredSubTasks, subTask =>
        subTask.labels.some(label => label.toLowerCase() === lowerCasedLabel) ? subTask.id : null,
      );
    }, subTasks);
  }),
);

import Storage from 'utils/storage';
import delay from 'utils/delay';

export default delay(searchLabel => {
  const subTasks = Storage.subTasks.get();
  const lowerCasedLabel = searchLabel.toLowerCase();

  return subTasks.filter(subTask =>
    subTask.labels.some(label => label.toLowerCase() === lowerCasedLabel),
  );
});

import Storage from 'utils/storage'
import delay from 'utils/delay'

export default delay(taskId => {
  const subTasks = Storage.subTasks.get()

  return subTasks.filter(subTask => subTask.taskId === taskId)
})

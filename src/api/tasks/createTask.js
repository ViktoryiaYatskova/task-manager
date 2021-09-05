import faker from 'faker'
import Storage from 'utils/storage'
import delay from 'utils/delay'
import { labels } from '../config'
import { getRandomNumber } from '../utils'

export default delay(() => {
  const tasks = Storage.tasks.get()
  const subTasks = Storage.subTasks.get()
  const task = {
    id: faker.datatype.uuid(),
    createTime: Date.now(),
    title: faker.lorem.sentence(),
  }
  const subTaskList = Array.from({ length: getRandomNumber(1, 10) }).map(() => ({
    id: faker.datatype.uuid(),
    taskId: task.id,
    title: faker.lorem.sentence(),
    labels: [
      ...new Set(
        Array.from({ length: getRandomNumber(1, 5) }).map(() => labels[getRandomNumber(0, 9)]),
      ),
    ],
  }))

  Storage.tasks.set([...tasks, task])
  Storage.subTasks.set([...subTasks, ...subTaskList])

  return task
})

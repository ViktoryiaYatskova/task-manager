import Storage from 'utils/storage'
import delay from 'utils/delay'

export default delay(() => Storage.tasks.get())

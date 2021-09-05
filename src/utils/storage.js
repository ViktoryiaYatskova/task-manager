class Storage {
  key = null

  constructor(key) {
    this.key = key
    if (!localStorage.getItem(this.key)) localStorage.setItem(this.key, JSON.stringify([]))
  }

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.key))
    } catch {
      return null
    }
  }

  set(value) {
    localStorage.setItem(this.key, JSON.stringify(value))
  }
}

export default {
  tasks: new Storage('tasks'),
  subTasks: new Storage('subTasks'),
}

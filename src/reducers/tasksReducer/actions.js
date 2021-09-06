import { createAction } from '@reduxjs/toolkit'

export const tasksSetAction = createAction('tasks/set');
export const taskCreateAction = createAction('task/create');
export const tasksFetchAction = createAction('tasks/fetch');
import { createAction } from '@reduxjs/toolkit'

export const tasksSet = createAction('tasks/set');
export const tasksFetchAction = createAction('tasks/fetch');
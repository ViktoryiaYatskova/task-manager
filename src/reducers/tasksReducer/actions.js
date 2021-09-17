import { createAction } from '@reduxjs/toolkit';

export const tasksSetAction = createAction('tasks/set');
export const taskCreateAction = createAction('task/create');
export const tasksFetchAction = createAction('tasks/fetch');
export const tasksSetFoundAction = createAction('tasks/set/found');
export const tasksResetFoundAction = createAction('tasks/reset/found');
export const taskDeleteSucceedAction = createAction('task/delete/success');

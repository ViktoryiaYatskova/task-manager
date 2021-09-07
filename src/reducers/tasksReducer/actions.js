import { createAction } from '@reduxjs/toolkit';

export const tasksSetAction = createAction('tasks/set');
export const taskCreateAction = createAction('task/create');
export const tasksFetchAction = createAction('tasks/fetch');

export const subTasksFetchAction = createAction('subtasks/fetch');
export const subTasksSetAction = createAction('subtasks/set');
export const subTaskDeleteAction = createAction('subTask/delete');

export const subTaskDeleteSucceedAction = createAction('subTask/delete:success');

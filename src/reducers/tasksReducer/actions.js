import { createAction } from '@reduxjs/toolkit';

export const tasksSetAction = createAction('tasks/set');
export const taskCreateAction = createAction('task/create');
export const tasksFetchAction = createAction('tasks/fetch');
export const tasksSetFoundAction = createAction('tasks/set/found');
export const findTasksAndSubTasksAction = createAction('tasks/find');

export const subTasksFetchAction = createAction('subTasks/fetch');
export const subTasksSetAction = createAction('subTasks/set');
export const subTasksSetFoundAction = createAction('subTasks/set/found');
export const subTaskDeleteAction = createAction('subTask/delete');
export const subTaskDeleteSucceedAction = createAction('subTask/delete/success');

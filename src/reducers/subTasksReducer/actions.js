import { createAction } from '@reduxjs/toolkit';

export const subTasksFetchAction = createAction('subTasks/fetch');
export const subTasksSetAction = createAction('subTasks/set');
export const subTasksSetFoundAction = createAction('subTasks/set/found');
export const subTasksResetFoundAction = createAction('subTask/reset/found');
export const subTaskDeleteAction = createAction('subTask/delete');
export const subTaskDeleteSucceedAction = createAction('subTask/delete/success');

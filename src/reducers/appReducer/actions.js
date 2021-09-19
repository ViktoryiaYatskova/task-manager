import { createAction } from '@reduxjs/toolkit';

export const setAppModeAction = createAction('app/mode');
export const searchItemsAction = createAction('app/searchItems');
export const searchItemsByLabelAction = createAction('app/searchItems:byLabel');

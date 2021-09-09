import { createReducer } from '@reduxjs/toolkit';
import { AppModes } from 'constants/general';
import { setAppModeAction } from './actions';

const initialTasksState = {
  appMode: AppModes.VIEW,
};

const appReducer = createReducer(initialTasksState, builder => {
  builder.addCase(setAppModeAction, (state, { payload: appMode }) => ({
    ...state,
    appMode,
  }));
});

export default appReducer;

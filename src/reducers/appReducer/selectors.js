import { AppModes } from 'constants/general';

export const isSearchModeSelector = (state) => state.app.appMode === AppModes.SEARCH;
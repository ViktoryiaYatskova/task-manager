import { createReducer } from '@reduxjs/toolkit';
import { setAppModeAction, searchItemsAction } from './actions';

const initialTasksState = {
  isSearchMode: false,
  searchQuery: '',
};

const appReducer = createReducer(initialTasksState, builder => {
  builder
    .addCase(setAppModeAction, (state, { payload: isSearchMode }) => ({
      ...state,
      isSearchMode,
      searchQuery: isSearchMode ? state.searchQuery : '',
    }))
    .addCase(searchItemsAction, (state, { payload: searchQuery }) => ({
      ...state,
      searchQuery,
    }));
});

export default appReducer;

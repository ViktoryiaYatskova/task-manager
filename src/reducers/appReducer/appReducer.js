import { createReducer } from '@reduxjs/toolkit';
import { searchSubTasksByLabelAction } from 'reducers/subTasksReducer/actions';
import { setAppModeAction, searchItemsAction } from './actions';

const initialTasksState = {
  isSearchMode: false,
  searchQuery: '',
};

const appReducer = createReducer(initialTasksState, builder => {
  builder
    // TODO: get rid of using alian action
    .addCase(searchSubTasksByLabelAction, state => ({
      ...state,
      isSearchMode: true,
      searchQuery: '',
    }))
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

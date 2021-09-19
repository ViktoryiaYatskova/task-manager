import { createReducer } from '@reduxjs/toolkit';
import { uniques } from 'helpers/genericHelpers';
import { setAppModeAction, searchItemsAction, searchItemsByLabelAction } from './actions';

const initialTasksState = {
  isSearchMode: false,
  searchQuery: '',
  filters: [],
};

const appReducer = createReducer(initialTasksState, builder => {
  builder
    .addCase(searchItemsByLabelAction, (state, { payload: label }) => ({
      ...state,
      isSearchMode: true,
      searchQuery: '',
      filters: uniques(...state.filters, label),
    }))
    .addCase(setAppModeAction, (state, { payload: isSearchMode }) => ({
      ...state,
      isSearchMode,
      searchQuery: isSearchMode ? state.searchQuery : '',
      filters: isSearchMode ? state.filters : [],
    }))
    .addCase(searchItemsAction, (state, { payload: searchQuery }) => ({
      ...state,
      searchQuery,
    }));
});

export default appReducer;

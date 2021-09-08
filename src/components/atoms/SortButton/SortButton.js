import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { SortTypes } from 'constants/tasksConstants';
import { SortButton as SortButtonStyled } from './SortButton.styles';

const SortButtonTitles = {
  [SortTypes.CREATE_TIME]: 'Sort by create-date',
  [SortTypes.TITLE]: 'Sort by title',
};

export const SortButton = ({ sortType, sortBy }) => {
  // I'd rather remove useCallback, as it doesn't make here an optimization: https://kentcdodds.com/blog/usememo-and-usecallback
  // but I keed it, since it's an configured code-style by eslint-rule: react-perf/jsx-no-new-function-as-prop
  const onSortClick = useCallback(() => sortBy(sortType), [sortBy, sortType]);

  return <SortButtonStyled onClick={onSortClick}>{SortButtonTitles[sortType]}</SortButtonStyled>;
};

SortButton.propTypes = {
  sortType: PropTypes.string.isRequired,
  sortBy: PropTypes.func.isRequired,
};

export default SortButton;

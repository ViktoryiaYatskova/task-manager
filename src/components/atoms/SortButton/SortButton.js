import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { SortTypes } from 'constants/tasksConstants';
import { SortButton as SortButtonStyled } from './SortButton.styles';

const SortButtonTitles = {
  [SortTypes.CREATE_TIME]: 'Sort by create-date',
  [SortTypes.TITLE]: 'Sort by title',
};

export const SortButton = ({ sortType, sortBy }) => {
  // UseCallback is needed, since it uses an closure value
  const onSortClick = useCallback(() => sortBy(sortType), [sortBy, sortType]);

  return (
    <SortButtonStyled className="yellow-button" onClick={onSortClick}>
      {SortButtonTitles[sortType]}
    </SortButtonStyled>
  );
};

SortButton.propTypes = {
  sortType: PropTypes.string.isRequired,
  sortBy: PropTypes.func.isRequired,
};

export default SortButton;

import React from 'react';
import PropTypes from 'prop-types';
import { SortTypes } from 'constants/tasksConstants';
import { SortButton, ButtonContainer } from './SortTasksButtons.styles';

const SortButtonTitles = {
  [SortTypes.CREATE_TIME]: 'Sort by create-date',
  [SortTypes.TITLE]: 'Sort by title',
};

const SortTasksButtons = ({ sortBy }) => (
  <ButtonContainer>
    {Object.values(SortTypes).map(sortType => {
      // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
      const onSortClick = () => sortBy(sortType);

      return (
        <SortButton key={sortType} onClick={onSortClick}>
          {SortButtonTitles[sortType]}
        </SortButton>
      );
    })}
  </ButtonContainer>
);

SortTasksButtons.propTypes = {
  sortBy: PropTypes.func.isRequired,
};

export default SortTasksButtons;

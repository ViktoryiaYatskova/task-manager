import React from 'react';
import PropTypes from 'prop-types';
import { SortTypes } from 'constants/tasksConstants';
import { Button } from 'components/atoms';

const SortButtonTitles = {
  [SortTypes.CREATE_TIME]: 'Sort by create-date',
  [SortTypes.TITLE]: 'Sort by title',
};

const SortTasksButtons = ({ sortBy }) => (
  <>
    {Object.values(SortTypes).map(sortType => {
      // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
      const onSortClick = () => sortBy(sortType);

      return (
        <Button key={sortType} onClick={onSortClick}>
          {SortButtonTitles[sortType]}
        </Button>
      );
    })}
  </>
);

SortTasksButtons.propTypes = {
  sortBy: PropTypes.func.isRequired,
};

export default SortTasksButtons;

import React from 'react';
import PropTypes from 'prop-types';
import { SortTypes } from 'constants/tasksConstants';
import { Button } from 'components/atoms';

const SortButtonTitles = {
  [SortTypes.BY_CREATE_DATE]: 'Sort by create-date',
  [SortTypes.BY_TITLE]: 'Sort by title',
};

const SortTasksButtons = ({ sortBy }) => (
  <>
    {Object.keys(SortTypes).map(sortType => {
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

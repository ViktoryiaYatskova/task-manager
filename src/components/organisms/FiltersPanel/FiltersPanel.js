import React from 'react';
import { useSelector } from 'react-redux';
import { subTaskFiltersSelector } from 'reducers/subTasksReducer/selectors';
import { LabelsList } from 'components/molecules';

const FiltersPanel = () => {
  const filters = useSelector(subTaskFiltersSelector);

  return (
    <div>
      <LabelsList labels={filters} />
    </div>
  );
};

export default FiltersPanel;

import React from 'react';
import { useSelector } from 'react-redux';
import { filtersSelector } from 'reducers/appReducer/selectors';
import { LabelsList } from 'components/molecules';

const FiltersPanel = () => {
  const filters = useSelector(filtersSelector);

  return (
    <div>
      <LabelsList labels={filters} />
    </div>
  );
};

export default FiltersPanel;

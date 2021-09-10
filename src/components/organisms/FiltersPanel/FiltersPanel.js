import React, { useMemo } from 'react';
// import PropTypes from 'prop-types';
import { LabelsList } from 'components/molecules';

const FiltersPanel = () => {
  // TODO: fetch labels list via API
  const labels = useMemo(() => ['ut', 'sed', 'sunt', 'commodi', 'dolores']); // useSelector(labelsSelector);

  return (
    <div>
      <LabelsList labels={labels} />
    </div>
  );
};

export default FiltersPanel;

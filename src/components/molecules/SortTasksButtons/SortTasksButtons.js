import React from 'react';
import PropTypes from 'prop-types';
import { SortTypes } from 'constants/tasksConstants';
import { SortButton } from 'components/atoms';
import { ButtonContainer } from './SortTasksButtons.styles';

const SortTasksButtons = ({ sortBy }) => (
  <ButtonContainer>
    {Object.values(SortTypes).map(sortType => (
      <SortButton key={sortType} sortBy={sortBy} sortType={sortType} />
    ))}
  </ButtonContainer>
);

SortTasksButtons.propTypes = {
  sortBy: PropTypes.func.isRequired,
};

export default SortTasksButtons;

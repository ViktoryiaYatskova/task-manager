import React from 'react';
import FoundSubTasksList from 'components/organisms/FoundSubTasksList/FoundSubTasksList';
import FoundTasksList from 'components/organisms/FoundTaskList/FoundTaskList';
import { FoundSection } from './FoundItemSection.styles';

const FoundItemsSection = () => (
  <FoundSection>
    <FoundTasksList />
    <FoundSubTasksList />
  </FoundSection>
);

export default FoundItemsSection;

import styled from 'styled-components';
import { Button } from 'components/atoms';

export const LabelStyled = styled(Button)`
  padding: 0 5px;
`;

export const LabelsListContainer = styled.ul`
  margin: 3px 0 10px;

  & > li {
    display: inline-block;
    margin-right: 5px;
  }
`;

export const LabelListItem = styled.li`
  display: inline-block;
  margin-right: 5px;
`;

import styled from 'styled-components';

export const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskName = styled.span`
  flex-basis: 40%;
  max-width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

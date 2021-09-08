import styled from 'styled-components';

export const Label = styled.li`
  display: inline-block;
  margin-right: 5px;
  padding: 0 5px;

  border-radius: 1em;
  background-color: #9c9cc7;
  color: #fff;
`;

export const LabelsList = styled.ul`
  margin: 3px 0 10px;
`;

export const RemoveButton = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

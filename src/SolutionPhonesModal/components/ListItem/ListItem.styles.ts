import styled from 'styled-components';
import { flexFn, pxToRem } from '../../../styles/utils';

export const ListItemStyled = styled.li`
  width: 100%;
  list-style-type: none;
  height: ${pxToRem(40)};
  padding: ${pxToRem(12)};
  ${flexFn('flex-start')}
  cursor: pointer;
  gap: ${pxToRem(12)};

  &:hover {
    background-color: wheat;
  }
`;

export const PrefixStyled = styled.div`
  flex-grow: 1;
  text-align: right;
  font-weight: 500;
`;

import styled from 'styled-components';
import { flexFn, pxToRem } from '../../../styles/utils';

export const ListSearchStyled = styled.div`
  width: 100%;
  height: ${pxToRem(40)};
  padding: ${pxToRem(5)};
  ${flexFn('flex-start')}
  border-bottom: ${pxToRem(1)} solid #e4e4eb;
`;

export const ImgStyled = styled.img`
  width: ${pxToRem(25)};
  height: ${pxToRem(25)};
`;

export const InputStyled = styled.input`
  height: ${pxToRem(40)};
  border: 0;
  padding: ${pxToRem(6)};
  width: ${pxToRem(400)};
  border-bottom: ${pxToRem(1)} solid #e4e4eb;

  &:focus {
    outline: none;
  }
`;

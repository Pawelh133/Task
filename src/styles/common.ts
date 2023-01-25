import styled from 'styled-components';
import { flexFn, pxToRem } from './utils';

const btnPrimaryColor = '#5870E0';
const btnSecondaryColor = '#FFFFFF';

export const ButtonStyledFilled = styled.button`
  height: ${pxToRem(32)};
  background: ${btnPrimaryColor};
  border-radius: ${pxToRem(8)};
  border: none;
  min-width: ${pxToRem(115)};
  color: ${btnSecondaryColor};
  font-weight: 400;
  font-size: ${pxToRem(14)};
  cursor: pointer;
  ${flexFn()}
`;

export const ButtonStyled = styled.button`
  height: ${pxToRem(32)};
  border-radius: ${pxToRem(8)};
  background: ${btnSecondaryColor};
  border: ${pxToRem(1)} solid ${btnPrimaryColor};
  min-width: ${pxToRem(115)};
  color: ${btnPrimaryColor};
  font-weight: 400;
  font-size: ${pxToRem(14)};
  cursor: pointer;
  ${flexFn()}
`;

import styled from 'styled-components';
import { flexFn, pxToRem } from '../../../../../styles/utils';

const backgroundPrimaryColor = '#ffffff';
const borderPrimaryColor = '#c7c9d9';

export const PrefixSelectorButtonStyled = styled.button`
  height: ${pxToRem(40)};
  border-radius: ${pxToRem(6)};
  background-color: ${backgroundPrimaryColor};
  border: ${pxToRem(1)} solid ${borderPrimaryColor};
  min-width: ${pxToRem(115)};
  font-weight: 400;
  font-size: ${pxToRem(14)};
  cursor: pointer;
  padding: ${pxToRem(12)};
  ${flexFn('flex-start')}
  gap: ${pxToRem(6)};
`;

export const ArrowStyled = styled.img`
  width: ${pxToRem(25)};
  height: ${pxToRem(25)};
  display: block;
`;

export const PrefixValueStyled = styled.div`
  flex-grow: 1;
`;

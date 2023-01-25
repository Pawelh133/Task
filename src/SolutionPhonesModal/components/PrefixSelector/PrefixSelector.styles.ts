import styled from 'styled-components';
import { pxToRem } from '../../../styles/utils';

const backgroundPrimaryColor = '#ffffff';
const borderPrimaryColor = '#c7c9d9';

export const PrefixSelectorContainerStyled = styled.div`
  position: relative;
`;

export const ListContentStyled = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  overflow-y: hidden;
  top: ${pxToRem(45)};
  background-color: ${backgroundPrimaryColor};
  max-height: ${({ $isVisible }) => ($isVisible ? pxToRem(260) : 0)};
  width: ${pxToRem(260)};
  transition: all 0.3s;
  border: ${({ $isVisible }) => pxToRem($isVisible ? 1 : 0)} solid
    ${borderPrimaryColor};
  border-radius: ${pxToRem(6)};
`;

export const ListContainerStyled = styled.ul`
  overflow-y: auto;
  max-height: ${pxToRem(220)};
`;

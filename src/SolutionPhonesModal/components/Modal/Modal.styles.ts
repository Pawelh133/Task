import styled from 'styled-components';
import { pxToRem } from '../../../styles/utils';

export const ContainerStyled = styled.div`
  padding: ${pxToRem(30)};
`;

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${pxToRem(50)};
  z-index: 1000;
`;

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1e1e1e;
  opacity: 0.4;
  z-index: 1000;
`;

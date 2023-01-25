import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';
import { flexFn, pxToRem } from '../../../styles/utils';

const headerFontColor = '#555770';
const inputBorderColor = '#C7C9D9';

export const ModalContentStyled = styled.div`
  width: ${pxToRem(565)};
  height: ${pxToRem(202)};
  background-color: white;
  padding: ${pxToRem(24)};
  border-radius: ${pxToRem(12)};
  ${flexFn('flex-start', 'start', 'column')}
  gap: ${pxToRem(16)};
`;

export const ModalBodyStyled = styled.div`
  ${flexFn('flex-start', 'stretch', 'column')}
  gap: ${pxToRem(10)};
`;

export const ModalHeaderStyled = styled.h2`
  color: ${headerFontColor};
  font-size: ${pxToRem(18)};
  font-weight: 600;
`;

export const InputStyled = styled(ReactInputMask)`
  height: ${pxToRem(40)};
  border-radius: ${pxToRem(6)};
  border: ${pxToRem(1)} solid ${inputBorderColor};
  padding: ${pxToRem(6)};
  width: ${pxToRem(400)};

  &:focus {
    outline: none;
  }
`;

export const InputContainerStyled = styled.div`
  ${flexFn('flex-start', 'center')}
  gap: ${pxToRem(10)};
`;

export const ModalSubHeaderStyled = styled.h3`
  color: ${headerFontColor};
  font-size: ${pxToRem(12)};
  padding-left: ${pxToRem(8)};
  font-weight: 400;
`;

export const ModalFooterStyled = styled.div`
  ${flexFn('flex-end', 'end')}
  align-self: flex-end;
  gap: ${pxToRem(24)};
`;

import { FC } from 'react';
import ReactDom from 'react-dom';
import { ModalStyled, OverlayStyled } from './Modal.styles';
import { IModalProps } from './Modal.types';

const Modal: FC<IModalProps> = ({
  children,
  open,
  onClose,
}): JSX.Element | null => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <OverlayStyled onClick={onClose} />
      <ModalStyled>{children}</ModalStyled>
    </>,
    document.getElementById('portal') as Element
  );
};

export default Modal;

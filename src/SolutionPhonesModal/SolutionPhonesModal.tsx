import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonStyledFilled } from '../styles/common';
import Modal from './components/Modal/Modal';
import ModalContent from './components/ModalContent/ModalContent';
import { ContainerStyled } from './SolutionPhonesModal.styles';
import { IModalState } from './SolutionPhonesModal.types';

const SolutionPhonesModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModalState, setModalState] = useState<IModalState>({
    number: '',
    searchPhrase: '',
    prefixValue: { code: '', prefix: '', name: '' },
  });

  const { control, reset, watch, handleSubmit } = useForm<IModalState>({
    defaultValues: currentModalState,
  });

  const onCancel = () => {
    reset(currentModalState);
    setIsOpen(false);
  };

  const onSave = (data: IModalState) => {
    setModalState(data);
    setIsOpen(false);
  };

  return (
    <ContainerStyled>
      <ButtonStyledFilled onClick={() => setIsOpen(true)}>
        Open modal
      </ButtonStyledFilled>
      <Modal open={isOpen} onClose={onCancel}>
        <ModalContent
          control={control}
          watch={watch}
          onSave={handleSubmit(onSave)}
          onClose={onCancel}
        />
      </Modal>
    </ContainerStyled>
  );
};

export default SolutionPhonesModal;

import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { IModalState } from '../../SolutionPhonesModal.types';

export interface IModalContentProps {
  onClose: () => void;
  onSave: () => void;
  watch: UseFormWatch<IModalState>;
  setValue: UseFormSetValue<IModalState>;
  control: Control<IModalState>;
}

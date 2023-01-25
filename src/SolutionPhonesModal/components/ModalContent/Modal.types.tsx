import { Control, UseFormWatch } from 'react-hook-form';
import { IModalState } from '../../SolutionPhonesModal.types';

export interface IModalContentProps {
  onClose: () => void;
  onSave: () => void;
  watch: UseFormWatch<IModalState>;
  control: Control<IModalState>;
}

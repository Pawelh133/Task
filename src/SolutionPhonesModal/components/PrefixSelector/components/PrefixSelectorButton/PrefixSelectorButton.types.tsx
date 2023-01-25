import { Control } from 'react-hook-form';
import { IModalState } from '../../../../SolutionPhonesModal.types';

export interface IPrefixSelectorButtonProps {
  control: Control<IModalState>;
  isLoading: boolean;
  toggleSetIsOpen: () => void;
}

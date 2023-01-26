import { Control, UseFormSetValue } from 'react-hook-form';
import { IPrefixData } from '../../../interfaces/PrefixData.interface';
import { IModalState } from '../../SolutionPhonesModal.types';

export interface PrefixSelectorProps {
  isLoading: boolean;
  control: Control<IModalState>;
  prefixData: IPrefixData[];
  setValue: UseFormSetValue<IModalState>
}

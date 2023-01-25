import { IPrefixData } from '../../../interfaces/PrefixData.interface';

export interface IListItemProps {
  value: IPrefixData;
  onSelect: (value: IPrefixData) => void;
}

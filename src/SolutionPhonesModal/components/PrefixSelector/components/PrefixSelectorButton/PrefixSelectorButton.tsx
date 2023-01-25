import { FC } from 'react';
import { Controller } from 'react-hook-form';
import FlagIcon from '../../../FlagIcon/FlagIcon';
import {
  ArrowStyled,
  PrefixSelectorButtonStyled,
  PrefixValueStyled,
} from './PrefixSelectorButton.styles';
import { IPrefixSelectorButtonProps } from './PrefixSelectorButton.types';
import arrowSvg from '../../../../../utils/icons/dropdown-arrow.svg';

const PrefixSelectorButton: FC<IPrefixSelectorButtonProps> = ({
  control,
  isLoading,
  toggleSetIsOpen,
}): JSX.Element | null => {
  return (
    <Controller
      key={'prefixValue'}
      name={'prefixValue'}
      control={control}
      render={({ field: { value } }) => (
        <PrefixSelectorButtonStyled
          onClick={toggleSetIsOpen}
          disabled={isLoading}
        >
          {value.code && <FlagIcon code={value.code} size='lg' />}
          <PrefixValueStyled>{value.prefix}</PrefixValueStyled>
          <ArrowStyled src={arrowSvg} alt='' />
        </PrefixSelectorButtonStyled>
      )}
    />
  );
};

export default PrefixSelectorButton;

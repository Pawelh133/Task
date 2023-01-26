import { FC, useEffect, useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Controller } from 'react-hook-form';
import ListItem from '../ListItem/ListItem';
import ListSearch from '../ListSearch/ListSearch';
import {
  ListContainerStyled,
  ListContentStyled,
  PrefixSelectorContainerStyled,
} from './PrefixSelector.styles';
import { PrefixSelectorProps } from './PrefixSelector.types';
import PrefixSelectorButton from './components/PrefixSelectorButton/PrefixSelectorButton';

const PrefixSelector: FC<PrefixSelectorProps> = ({
  isLoading,
  control,
  prefixData,
  setValue,
}): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setValue('searchPhrase', ''), 300); // setTimeout for correct animation purposes.
    }
  }, [isOpen, setValue]);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useDetectClickOutside({ onTriggered: handleClickOutside });

  return (
    <PrefixSelectorContainerStyled ref={ref}>
      <PrefixSelectorButton
        control={control}
        isLoading={isLoading}
        toggleSetIsOpen={() => setIsOpen(!isOpen)}
      />
      <ListContentStyled $isVisible={isOpen}>
        <Controller
          key={'searchPhrase'}
          name={'searchPhrase'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <ListSearch value={value} onChange={onChange} />
          )}
        />
        <Controller
          key={'prefixValue'}
          name={'prefixValue'}
          control={control}
          render={({ field: { onChange } }) => (
            <ListContainerStyled>
              {prefixData.map((item) => (
                <ListItem
                  key={item.code}
                  onSelect={(item) => {
                    onChange(item);
                    setIsOpen(false);
                  }}
                  value={item}
                />
              ))}
            </ListContainerStyled>
          )}
        />
      </ListContentStyled>
    </PrefixSelectorContainerStyled>
  );
};

export default PrefixSelector;

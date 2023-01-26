import axios from 'axios';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { useQuery } from 'react-query';
import { IResponseData } from '../../../interfaces/IResponseData.interface';
import { IPrefixData } from '../../../interfaces/PrefixData.interface';
import { ButtonStyled, ButtonStyledFilled } from '../../../styles/common';
import PrefixSelector from '../PrefixSelector/PrefixSelector';
import { IModalContentProps } from './Modal.types';
import {
  InputContainerStyled,
  InputStyled,
  ModalBodyStyled,
  ModalContentStyled,
  ModalFooterStyled,
  ModalHeaderStyled,
  ModalSubHeaderStyled,
} from './ModalContent.styles';

const ModalContent: FC<IModalContentProps> = ({
  control,
  setValue,
  watch,
  onSave,
  onClose,
}): JSX.Element | null => {
  const apiUrl = 'https://restcountries.com/v3.1/all';
  const searchPhrase = watch('searchPhrase');
  const { isLoading, data: prefixData = [] } = useQuery('posts', async () => {
    const { data } = await axios.get<IResponseData[]>(apiUrl);

    let mappedData: IPrefixData[] = [];

    if (data && Array.isArray(data)) {
      mappedData = data.map((item) => ({
        name: item.name.common,
        code: item.cca2.toLowerCase(),
        prefix: item.idd.root,
      }));
    }

    return mappedData;
  });

  const filteredPrefixData = prefixData.filter((item) =>
    item.name.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <ModalContentStyled>
      <ModalHeaderStyled>Change phone number</ModalHeaderStyled>
      <ModalBodyStyled>
        <ModalSubHeaderStyled>Provide new phone number</ModalSubHeaderStyled>
        <InputContainerStyled>
          <PrefixSelector
            control={control}
            setValue={setValue}
            prefixData={filteredPrefixData}
            isLoading={isLoading}
          />
          <Controller
            key={'number'}
            name={'number'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputStyled
                mask='999-999-999'
                placeholder='000-000-000'
                value={value}
                onChange={onChange}
              />
            )}
          />
        </InputContainerStyled>
      </ModalBodyStyled>
      <ModalFooterStyled>
        <ButtonStyled onClick={onClose}>Cancel</ButtonStyled>
        <ButtonStyledFilled onClick={onSave}>Save</ButtonStyledFilled>
      </ModalFooterStyled>
    </ModalContentStyled>
  );
};

export default ModalContent;

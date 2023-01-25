import { FC } from 'react';
import { ImgStyled, InputStyled, ListSearchStyled } from './ListSearch.styles';
import { IListSearchProps } from './ListSearch.types';
import searchSvg from '../../../utils/icons/search-icon.svg';

const ListSearch: FC<IListSearchProps> = ({
  value,
  onChange,
}): JSX.Element | null => {
  const onChangeVal = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };

  return (
    <ListSearchStyled>
      <ImgStyled src={searchSvg} alt='' />
      <InputStyled
        value={value}
        onChange={onChangeVal}
        placeholder='Search...'
      />
    </ListSearchStyled>
  );
};

export default ListSearch;

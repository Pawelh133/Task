import { FC } from 'react';
import FlagIcon from '../FlagIcon/FlagIcon';
import { ListItemStyled, PrefixStyled } from './ListItem.styles';
import { IListItemProps } from './ListItem.types';

const ListItem: FC<IListItemProps> = ({
  value,
  onSelect,
}): JSX.Element | null => {
  return (
    <ListItemStyled onClick={() => onSelect(value)}>
      {value.code && <FlagIcon code={value.code} size='lg' />}
      <div>{value.name}</div>
      <PrefixStyled>{value.prefix}</PrefixStyled>
    </ListItemStyled>
  );
};

export default ListItem;

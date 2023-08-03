import {Select} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SortSelector() {
  const [service, setService] = React.useState('product');

  return (
    <Select
      selectedValue={service}
      flex={1}
      mx={2}
      bg="white"
      h={10}
      _actionSheet={{useRNModal: true}}
      _selectedItem={{
        endIcon: <Icon name="search" size={13} color="white" />,
      }}
      onValueChange={itemValue => setService(itemValue)}>
      <Select.Item label="정렬하기" value="product" />
      <Select.Item label="개발중입니다." value="post" />
    </Select>
  );
}

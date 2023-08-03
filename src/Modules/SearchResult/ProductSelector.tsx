import {Select} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductSelector() {
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
      <Select.Item label="삼성" value="product" />
      <Select.Item label="애플" value="post" />
      <Select.Item label="기타" value="review" />
    </Select>
  );
}

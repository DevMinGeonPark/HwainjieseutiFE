import React from 'react';
import {Select, CheckIcon, Box} from 'native-base';

export default function SearchLogicSelector() {
  const [service, setService] = React.useState('or');

  return (
    <Select
      selectedValue={service}
      flex={1}
      h={10}
      bg="white"
      _selectedItem={{
        endIcon: <CheckIcon size="5" />,
      }}
      mt={1}
      onValueChange={itemValue => setService(itemValue)}>
      <Select.Item label="또는" value="or" />
      <Select.Item label="그리고" value="and" />
    </Select>
  );
}

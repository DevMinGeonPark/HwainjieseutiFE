import React from 'react';
import {Select, CheckIcon, Box} from 'native-base';

export default function SearchTypeSelector() {
  const [service, setService] = React.useState('product');

  return (
    <>
      <Select
        selectedValue={service}
        flex={1}
        bg="white"
        h={10}
        _selectedItem={{
          endIcon: <CheckIcon size="1" />,
        }}
        mt={1}
        onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="상품" value="product" />
        <Select.Item label="게시물" value="post" />
        <Select.Item label="후기" value="review" />
        <Select.Item label="문의" value="inquiry" />
        <Select.Item label="태그" value="tag" />
      </Select>
    </>
  );
}

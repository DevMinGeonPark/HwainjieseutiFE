import {Select} from 'native-base';
import React from 'react';

interface CategorySelectorProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategorySelector({setCategory}: CategorySelectorProps) {
  return (
    <Select
      placeholder="선택하세요"
      bg="white"
      h={9}
      _actionSheet={{useRNModal: true}}
      onValueChange={itemValue => setCategory(itemValue)}>
      <Select.Item label="회원" value="회원" />
      <Select.Item label="포인트" value="포인트" />
    </Select>
  );
}

// CategorySelector.ts
import {useRoute} from '@react-navigation/native';
import {Select} from 'native-base';
import React, {useEffect} from 'react';
import {WriteQnAParamsProps} from '@Types/NavigationTypes';

interface CategorySelectorProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategorySelector({
  category,
  setCategory,
}: CategorySelectorProps) {
  const routeParams = useRoute().params as WriteQnAParamsProps;

  return (
    <Select
      placeholder="선택하세요"
      bg="white"
      h={9}
      selectedValue={routeParams?.Category || category}
      _actionSheet={{useRNModal: true}}
      onValueChange={itemValue => setCategory(itemValue)}>
      <Select.Item label="회원" value="회원" />
      <Select.Item label="포인트" value="포인트" />
    </Select>
  );
}

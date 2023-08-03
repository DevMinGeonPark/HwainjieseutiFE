import {View, Text} from 'react-native';
import React from 'react';
import {HStack} from 'native-base';
import SortItem from '@src/Atomic/Products/SortItem';
import {ParamProps} from '@src/Types/ProductTypes';

interface SortBarProps {
  setParams: React.Dispatch<React.SetStateAction<ParamProps>>;
  MenuType: string;
  MenuVar: string;
}

export default function SortBar({setParams, MenuType, MenuVar}: SortBarProps) {
  return (
    <HStack space={3} m={4} justifyContent="flex-end">
      <SortItem
        title="낮은가격"
        onPress={() => {
          setParams({
            MenuType: MenuType,
            MenuVar: MenuVar,
            sort: 'it_Price',
            sortodr: 'aec',
          });
        }}
      />
      <SortItem
        title="높은가격"
        onPress={() => {
          setParams({
            MenuType: MenuType,
            MenuVar: MenuVar,
            sort: 'it_Price',
            sortodr: 'desc',
          });
        }}
      />
      <SortItem
        title="신상품"
        onPress={() => {
          setParams({
            MenuType: MenuType,
            MenuVar: MenuVar,
            sort: 'it_update_time',
            sortodr: 'aec',
          });
        }}
      />
    </HStack>
  );
}

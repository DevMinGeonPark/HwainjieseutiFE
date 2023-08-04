import {Box, Button, Checkbox, HStack, Input, VStack} from 'native-base';
import React from 'react';
import {FontText} from '@src/Atomic/FontText';
import CheckBoxItem from '@src/Atomic/CheckBoxItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ParamProps} from '@Types/SearchDataType';

interface checkBoxItemType {
  title: string;
  value: string;
}

interface SearchOptionProps {
  SearchOptionData: ParamProps;
  setSearchOptionData: React.Dispatch<React.SetStateAction<ParamProps>>;
}

// {
//   SearchOptionData,
//   setSearchOptionData,
// }: SearchOptionProps

export default function SearchOption() {
  const checkBoxItems = [
    {title: '제목', value: 'S'},
    {title: '설명', value: 'D'},
    {title: '코드', value: 'C'},
    {title: '태그', value: 'T'},
  ] as checkBoxItemType[];

  return (
    <VStack
      space={3}
      p={4}
      mt={4}
      bg="#FAFAFA"
      borderWidth={1}
      borderColor="#ddd">
      <HStack space={2}>
        {checkBoxItems.map((item, index) => {
          return (
            <CheckBoxItem key={index} title={item.title} value={item.value} />
          );
        })}
      </HStack>
      <HStack space={2} alignItems="center">
        <Input w={100} placeholder="최소 가격" />
        <FontText>~</FontText>
        <Input w={100} placeholder="최대 가격" />
      </HStack>
      <HStack space={2} alignItems="center">
        <Input w={200} placeholder="최소 가격" />
        <Button
          bg="black"
          _text={{fontSize: 12, fontWeight: '700'}}
          leftIcon={<Icon name="search" size={13} color="white" />}>
          검색하기
        </Button>
      </HStack>
      <FontText>
        검색범위을 선택하지 않거나, 상품가격을 입력하지 않으면 전체에서 검색합니
        검색어는 최대 30글자까지, 여러개의 검색어를 공백으로 구분하여 입력
        할수있습니다.
      </FontText>
    </VStack>
  );
}

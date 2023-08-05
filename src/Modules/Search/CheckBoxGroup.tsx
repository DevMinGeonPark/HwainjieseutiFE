import React, {useEffect, useState} from 'react';
import {Checkbox, VStack, Box, HStack} from 'native-base';
import {FontText} from '@src/Atomic/FontText';
import {useRoute} from '@react-navigation/native';

interface CheckboxGroupProps {
  selected: string[];
  handleCheckboxToggle: (value: string) => void;
}

function CheckboxGroup({selected, handleCheckboxToggle}: CheckboxGroupProps) {
  return (
    <VStack>
      <HStack space={2}>
        <Checkbox
          value="S"
          isChecked={selected.includes('S')}
          onChange={() => handleCheckboxToggle('S')}>
          <FontText ml={-1}>제목</FontText>
        </Checkbox>
        <Checkbox
          value="D"
          isChecked={selected.includes('D')}
          onChange={() => handleCheckboxToggle('D')}>
          <FontText ml={-1}>설명</FontText>
        </Checkbox>
        <Checkbox
          value="C"
          isChecked={selected.includes('C')}
          onChange={() => handleCheckboxToggle('C')}>
          <FontText ml={-1}>코드</FontText>
        </Checkbox>
        <Checkbox
          value="T"
          isChecked={selected.includes('T')}
          onChange={() => handleCheckboxToggle('T')}>
          <FontText ml={-1}>태그</FontText>
        </Checkbox>
      </HStack>
    </VStack>
  );
}

export default CheckboxGroup;

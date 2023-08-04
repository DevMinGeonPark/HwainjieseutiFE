import {Checkbox} from 'native-base';
import React from 'react';
import {FontText} from '@src/Atomic/FontText';
interface SearchOptionProps {
  title: string;
  value: string;
}

export default function CheckBoxItem({title, value}: SearchOptionProps) {
  return (
    <Checkbox mt={2} defaultIsChecked value={value}>
      <FontText>{title}</FontText>
    </Checkbox>
  );
}

import {Checkbox} from 'native-base';
import React from 'react';
import {FontText} from '@src/Atomic/FontText';
interface SearchOptionProps {
  title: string;
  value: string;
}

export default function CheckBoxItem({title, value}: SearchOptionProps) {
  return (
    <Checkbox defaultIsChecked value={value}>
      <FontText>{title}</FontText>
    </Checkbox>
  );
}

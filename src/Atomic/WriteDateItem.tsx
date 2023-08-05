import Icon from 'react-native-vector-icons/FontAwesome';
import {FontText} from '@src/Atomic/FontText';
import React from 'react';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';
import {HStack, ITextProps} from 'native-base';

interface WriteDateItemProps extends InterfaceTextProps<ITextProps> {
  WriteDate: string;
  size?: number;
}

export default function WriteDateItem({
  WriteDate,
  size,
  ...props
}: WriteDateItemProps) {
  const dateRegex = /^\d{2}\.\d{2}$/;
  const isDateOnly = dateRegex.test(WriteDate);
  return (
    <HStack space={1} alignItems="center">
      <Icon name="clock-o" size={size || 13} color={'#777'} />
      <FontText
        fontSize={size || 13}
        color={isDateOnly ? '#777' : '#ff4500'}
        {...props}>
        {WriteDate}
      </FontText>
    </HStack>
  );
}

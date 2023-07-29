import {HStack} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FontText} from '../FontText';
import {formatDateTime} from '@Utils/FormatDate';
import React from 'react';

interface DateTimeItemProps {
  Date: string;
}

export default function DateTimeItem({Date}: DateTimeItemProps) {
  return (
    <HStack space={1} alignItems="center">
      <FontAwesome name="clock-o" size={11} color="#777" />
      <FontText color="#777" fontSize={12}>
        {formatDateTime(Date)}
      </FontText>
    </HStack>
  );
}

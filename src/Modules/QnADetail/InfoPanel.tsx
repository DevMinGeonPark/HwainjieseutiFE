import {FontText} from '@src/Atomic/FontText';
import {HStack} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import WriteDateItem from '@src/Atomic/WriteDateItem';
import {WriteDatePreprocesser} from '@src/Utils/WriteDatePreprocesser';

interface InfoPanelProps {
  WriteName: string;
  WriteHp: string;
  WriteDate: string;
}

export default function InfoPanel({
  WriteName,
  WriteHp,
  WriteDate,
}: InfoPanelProps) {
  const color = '#333333';
  const size = 12;
  return (
    <HStack bg="#FAFAFA" borderWidth={1} borderColor="#CCC" p={3}>
      <HStack space={1} alignItems="center" flexGrow={1}>
        <Icon name="user" size={size} color={color} />
        <FontText fontSize={size} color={color}>
          {WriteName}
        </FontText>
      </HStack>
      <HStack space={1} alignItems="center" flexGrow={4}>
        <Icon name="phone" size={size} color={color} />
        <FontText color={color}>{WriteHp}</FontText>
      </HStack>
      <WriteDateItem
        size={size}
        flexGrow={1}
        WriteDate={WriteDatePreprocesser(WriteDate)}
      />
    </HStack>
  );
}

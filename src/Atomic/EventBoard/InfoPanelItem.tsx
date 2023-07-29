import {HStack} from 'native-base';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FontText} from '../FontText';

interface InfoPanelItemProps {
  icon: string;
  data: string;
  color: string;
  weight: string;
}

export default function InfoPanelItem({
  icon,
  data,
  color,
  weight,
}: InfoPanelItemProps) {
  return (
    <HStack alignItems="center">
      <FontAwesome name={icon} size={11} color="#777" />
      <FontText color={color} fontSize={12} fontWeight={weight}>
        {data}
      </FontText>
    </HStack>
  );
}

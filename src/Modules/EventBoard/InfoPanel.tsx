import {FontText} from '@src/Atomic/FontText';
import {formatDateTime} from '@src/Utils/FormatDate';
import {Box, HStack} from 'native-base';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InfoPanelItem from '@src/Atomic/EventBoard/InfoPanelItem';
import DateTimeItem from '@src/Atomic/EventBoard/DateTimeItem';

interface InfoPanelProps {
  WriteDate: string;
  HitCount: string;
  CommentsCount: number;
}

export default function InfoPanel({
  WriteDate,
  HitCount,
  CommentsCount,
}: InfoPanelProps) {
  return (
    <HStack
      bg="#f5f5f5"
      p={3}
      borderTopWidth={1}
      borderBottomWidth={1}
      borderColor="#ddd">
      <HStack alignItems="center" flex={1}>
        <InfoPanelItem icon="user" data="KT공식몰" color="#777" weight="400" />
      </HStack>
      <HStack space={3} flex={2}>
        <InfoPanelItem
          icon="comment"
          data={CommentsCount.toString()}
          color="#E94E1B"
          weight="bold"
        />
        <InfoPanelItem icon="eye" data={HitCount} color="#777" weight="400" />
      </HStack>
      <DateTimeItem Date={WriteDate} />
    </HStack>
  );
}

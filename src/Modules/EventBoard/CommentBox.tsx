import {View, Text} from 'react-native';
import React from 'react';
import {Comment} from '@src/Types/EventDataTypes';
import {Circle, HStack, VStack, Box} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimeItem from '@src/Atomic/EventBoard/DateTimeItem';
import {FontHeading} from '@src/Atomic/FontHeading';
import {FontText} from '@src/Atomic/FontText';
import CommentItem from '@src/Atomic/EventBoard/CommentItem';

interface CommentBoxProps {
  Comment: Comment | undefined;
}

export default function CommentBox({Comment}: CommentBoxProps) {
  console.log(JSON.stringify(Comment, null, 2));
  return (
    <HStack
      p={2}
      alignItems="center"
      borderBottomColor="#ddd"
      borderBottomWidth={1}>
      <Circle size="md" bg="#F5F5F5">
        <Icon name="user" size={30} color="#8F8F8F" />
      </Circle>
      <HStack justifyContent="space-between">
        <VStack space={2} flex={3}>
          <HStack px={3} space={3} alignItems="center">
            <FontHeading fontSize={14}>{Comment?.UserNm}</FontHeading>
            <DateTimeItem Date="2023-07-03 10:12:04" />
          </HStack>
          <CommentItem
            Option={Comment?.Option || ''}
            Blinder={Comment?.Blinder || ''}
            Content={Comment?.Content || ''}
          />
        </VStack>
        <FontText flex={1}>답변</FontText>
      </HStack>
    </HStack>
  );
}

{
  /* <Circle size={20} bg="#8F8F8F" /> */
}

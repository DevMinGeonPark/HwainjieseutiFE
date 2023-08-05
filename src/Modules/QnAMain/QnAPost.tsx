import {VStack, Flex, HStack} from 'native-base';
import React from 'react';
import {Center} from 'native-base';
import {QNAItem, QnAMainData} from '@src/Types/QnAMainTypes';
import {FontText} from '@src/Atomic/FontText';
import Icon from 'react-native-vector-icons/FontAwesome';
import WriteDateItem from '@src/Atomic/WriteDateItem';

export default function QnAPost({
  QNAID,
  Subject,
  WriteDate,
  WriteName,
  Status,
}: QNAItem) {
  // 정규표현식으로 날짜 형식 확인 (예: 08.04)

  return (
    <HStack alignItems="center" borderBottomWidth={1} borderBottomColor="#CCC">
      <Flex flex={1}>
        <Center>
          <FontText fontSize={13} color={Status == 0 ? '#777' : '#ff4500'}>
            {Status == 0 ? '대기' : '완료'}
          </FontText>
        </Center>
      </Flex>
      <Flex flex={4}>
        <VStack space={1} p={2}>
          <FontText fontSize={14}>{Subject}</FontText>
          <HStack space={3} alignItems="center">
            <FontText fontSize={13} color="#777">
              <Icon name="user" size={13} color="#777" /> {WriteName}
            </FontText>
            <WriteDateItem WriteDate={WriteDate} />
          </HStack>
        </VStack>
      </Flex>
    </HStack>
  );
}

import {VStack, Flex, HStack} from 'native-base';
import React from 'react';
import {Center} from 'native-base';
import {QNAItem, QnAMainData} from '@src/Types/QnAMainTypes';
import {FontText} from '@src/Atomic/FontText';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function QnAPostItem({
  QNAID,
  Category,
  Subject,
  WriteDate,
  WriteName,
}: QNAItem) {
  // return <Center h={200}>문의글이 없습니다.</Center>;
  return (
    <HStack alignItems="center" borderBottomWidth={1} borderBottomColor="#CCC">
      <Flex flex={1}>
        <Center>
          <FontText fontSize={13} color="#777">
            대기
            {/* 이거 물어보기 */}
          </FontText>
        </Center>
      </Flex>
      <Flex flex={4}>
        <VStack space={1} p={2}>
          <FontText fontSize={14}>{Subject}</FontText>
          <HStack space={3} alignItems="center">
            <FontText fontSize={13} color="#777">
              <Icon name="user" size={13} color="#777" /> 홍길동1
            </FontText>
            <FontText fontSize={13} color="#777">
              <Icon name="clock-o" size={13} color="#777" /> {WriteDate}
            </FontText>
          </HStack>
        </VStack>
      </Flex>
    </HStack>
  );
}

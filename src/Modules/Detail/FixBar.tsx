import React from 'react';
import {Box, Button, HStack, VStack} from 'native-base';
import {FontText} from '@src/Atomic/FontText';
import {useWindowDimensions} from 'react-native';
import FixBarLabel from '@src/Atomic/Detail/FixBarLabel';

export default function FixBar() {
  const width = useWindowDimensions().width;
  return (
    <Box p={5} bg="black">
      <HStack space={4} alignItems="center">
        <FixBarLabel Title="월 할부금" Rate="36,718" />
        <FontText color={'white'}>+</FontText>
        <FixBarLabel Title="월 통신요금" Rate="36,718" />
        <FontText color={'white'}>=</FontText>
        <VStack>
          <FontText fontSize={12} color={'white'}>
            월 통신요금
          </FontText>
          <HStack>
            <FontText fontSize={15} fontWeight="bold" color={'white'}>
              146718 원
            </FontText>
            <FontText fontSize={12} color={'white'} pt={1}>
              (할부이자 별도)
            </FontText>
          </HStack>
        </VStack>
      </HStack>
      <HStack space={2} alignItems="center" maxWidth={width - 30} mt={4}>
        <Button
          bg="#5ddfde"
          _text={{fontSize: 18, color: 'black', fontWeight: 'bold'}}
          flex={1}>
          주문하기
        </Button>
        <Button
          bg="#f9e000"
          _text={{fontSize: 18, color: 'black', fontWeight: 'bold'}}
          flex={1}>
          카톡상담
        </Button>
      </HStack>
    </Box>
  );
}

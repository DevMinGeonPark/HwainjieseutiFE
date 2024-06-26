import React from 'react';
import {Box, Button, Center, HStack, Link, VStack} from 'native-base';
import {FontText} from '@src/Atomic/FontText';
import {Linking, useWindowDimensions} from 'react-native';
import FixBarLabel from '@src/Atomic/Detail/FixBarLabel';
import {NumberPreprocesser} from '@src/Utils/NumberPreprocesser';
import useFixBarStore from '@src/Store/fixBarStore';

export default function FixBar() {
  const width = useWindowDimensions().width;
  const {fixBarProps} = useFixBarStore();

  return (
    <Box p={4} bg="black" position="absolute" bottom={0} right={0} left={0}>
      <Center>
        <HStack space={4} alignItems="center">
          <FixBarLabel
            Title="월 할부금"
            Rate={NumberPreprocesser(
              fixBarProps?.ChgContractMonthChg?.toString() || '0',
            )}
          />
          <FontText fontSize={14} color={'white'}>
            +
          </FontText>
          <FixBarLabel
            Title="월 통신요금"
            Rate={NumberPreprocesser(
              fixBarProps?.ChgContractMonthRate?.toString() || '0',
            )}
          />
          <FontText fontSize={14} color={'white'}>
            =
          </FontText>
          <VStack>
            <FontText fontSize={12} color={'white'}>
              월 통신요금
            </FontText>
            <FontText fontSize={15} fontWeight="bold" color={'white'}>
              {NumberPreprocesser(
                fixBarProps?.ChgContractMonthTotal?.toString() || '0',
              )}{' '}
              원
            </FontText>
            <FontText fontSize={12} color={'white'}>
              (할부이자 별도)
            </FontText>
          </VStack>
        </HStack>
      </Center>
      <HStack space={2} alignItems="center" maxWidth={width - 30} mt={4}>
        <Button
          bg="#5ddfde"
          _text={{fontSize: 18, color: 'black', fontWeight: 'bold'}}
          flex={1}
          onPress={() => Linking.openURL(fixBarProps?.OrderPage || '')}>
          주문하기
        </Button>
        <Button
          bg="#f9e000"
          _text={{fontSize: 18, color: 'black', fontWeight: 'bold'}}
          flex={1}
          onPress={() => Linking.openURL('https://pf.kakao.com/_ULWxfd')}>
          카톡상담
        </Button>
      </HStack>
    </Box>
  );
}

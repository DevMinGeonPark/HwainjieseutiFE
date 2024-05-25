import {Pressable, VStack} from 'native-base';
import React from 'react';
import {Alert, Image, Linking} from 'react-native';
import {Images} from '@assets/imgs/Images';

const GoCustomerCenter = () => {
  return (
    <VStack p={3} space={2} position="absolute" bottom={0} right={0}>
      <Pressable
        onPress={() => {
          Linking.openURL('http://pf.kakao.com/_ULWxfd/chat');
        }}>
        <Image source={Images.Modal.katalk} />
      </Pressable>
      <Pressable
        onPress={() => {
          Linking.openURL(`tel:1577-3795`);
        }}>
        <Image source={Images.Modal.tel} />
      </Pressable>
    </VStack>
  );
};

export default GoCustomerCenter;

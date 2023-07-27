import {StyleSheet} from 'react-native';
import React from 'react';
import {Images} from '@assets/imgs/Images';
import {Center, HStack, Image} from 'native-base';

export default function Logos() {
  return (
    <Center overflow="hidden">
      <HStack space={2}>
        <Image
          source={Images.Footer.FTC}
          alt="FTC"
          width={70}
          height={100}
          resizeMode="contain"
        />
        <Image
          source={Images.Footer.KAIP}
          alt="KAIP"
          width={100}
          height={100}
          resizeMode="contain"
        />
        <Image
          source={Images.Footer.CICTM}
          alt="CICTM"
          width={100}
          height={100}
          resizeMode="contain"
        />
      </HStack>
    </Center>
  );
}

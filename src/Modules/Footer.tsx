import React from 'react';
import SocialContainer from '@src/Atomic/Footer/SocialContainer';
import {Images} from '@assets/imgs/Images';
import InfoContainer from '@src/Atomic/InfoContainer';
import {Center} from 'native-base';
import {Linking} from 'react-native';
import {Box} from 'native-base';

export default function Footer() {
  return (
    <Box>
      <Center bg="black" py={10}>
        <SocialContainer
          image={Images.Footer.Tel}
          title="1577-3795"
          desc="월-토 09:00 - 18:00 상담가능!"
          onPress={() => Linking.openURL(`tel:1577-3795`)}
        />
        <SocialContainer
          image={Images.Footer.kakao}
          title="카카오톡채널"
          desc="클릭하면 바로 1:1 상담가능!"
          onPress={() => Linking.openURL('https://pf.kakao.com/_ULWxfd')}
        />
        <SocialContainer
          image={Images.Footer.naver}
          title="네이버 톡톡"
          desc="클릭하면 바로 1:1 상담가능!"
          onPress={() => Linking.openURL('https://talk.naver.com/ct/wc981y')}
        />
      </Center>
      <InfoContainer />
    </Box>
  );
}

import {Modal, Image, HStack, VStack, Button, Box} from 'native-base';
import React from 'react';
import {Linking, BackHandler, Platform} from 'react-native';
import {Images} from '@assets/imgs/Images';
import {FontHeading} from '@src/Atomic/FontHeading';
import {FontText} from '@src/Atomic/FontText';
import SubNotice from '@src/Atomic/UpdateModal/SubNotice';
import MainNotice from '@src/Atomic/UpdateModal/MainNotice';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function UpdateModal() {
  const handleExitApp = () => {
    BackHandler.exitApp();
  };
  return (
    <Modal isOpen={true} size="full" p={2}>
      <Modal.Content rounded="2xl">
        <VStack space={5} mx={30} my={70}>
          <HStack space={3}>
            <Image size="lg" source={Images.Update.AppIcon} />
            <VStack>
              <FontHeading fontSize={30} color="#e5e5e5">
                UP
                <Icon name="check-circle" size={30} color="#67e39a" />
              </FontHeading>
              <FontHeading fontSize={30} color="#e5e5e5">
                DATE
              </FontHeading>
            </VStack>
          </HStack>
          <MainNotice />
          <SubNotice />
        </VStack>
        <HStack>
          <Button onPress={handleExitApp} w="50%" h="70" bg="#f0f0f0">
            <FontText fontSize={15} bold color="black">
              앱종료
            </FontText>
          </Button>
          <Button
            onPress={() => {
              let url = '';
              Platform.OS === 'android'
                ? (url =
                    'https://play.google.com/store/apps/details?id=com.finegst.mshop&hl=ko')
                : (url =
                    'https://apps.apple.com/ph/app/%EC%A3%BC-%ED%99%94%EC%9D%B8%EC%A7%80%EC%97%90%EC%8A%A4%ED%8B%B0/id6468455648');
              Linking.openURL(url).catch(err =>
                console.error('Could not open the store page.', err),
              );
            }}
            w="50%"
            h="70"
            bg="#222222">
            <FontText fontSize={15} bold color="white">
              지금 업데이트
            </FontText>
          </Button>
        </HStack>
      </Modal.Content>
    </Modal>
  );
}

import {Modal, VStack, HStack, Button, Image, Pressable} from 'native-base';
import React, {useState, useEffect} from 'react';
import popupStorage from '@src/Utils/popupStorage';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Alert, Text, useWindowDimensions} from 'react-native';
import usePopupModal from '@src/hooks/queryHooks/usePopupModal';
import Carousel from 'react-native-reanimated-carousel';
import {useUserState} from '@src/contexts/UserContext';
import {hasUserProperties} from '@src/Types/ContentTypes';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupModal({isOpen, onClose}: PopupModalProps) {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const width = useWindowDimensions().width;

  const {data} = usePopupModal();
  const [user] = useUserState();

  const [height, setHeight] = useState<number>(0);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" p={2}>
      <Modal.Content>
        <VStack>
          <Carousel
            loop
            width={width}
            height={height} // 288은 임의의 값이기 때문에 에러 가능성 있음
            autoPlay={true}
            data={data ? data : []}
            scrollAnimationDuration={1000}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
            renderItem={({item, index}): JSX.Element => (
              <Pressable
                key={index}
                onPress={() => {
                  onClose();
                  if (hasUserProperties(user)) {
                    console.log(item.GongLinkUrl);
                    navigation.navigate('Event', {
                      url: item.GongLinkUrl,
                    });
                  } else {
                    Alert.alert('로그인이 필요합니다.', '', [
                      {text: 'OK', onPress: () => navigation.navigate('Login')},
                    ]);
                  }
                }}>
                <AutoHeightImage
                  onHeightChange={height => {
                    setHeight(height);
                  }}
                  width={width}
                  source={{uri: item.GongImgUrl}}
                />
              </Pressable>
            )}
          />
          <HStack
            bg="black"
            py={2}
            px={2}
            space={1.5}
            justifyContent="flex-end">
            <Button
              size="sm"
              borderRadius={0}
              bg="#393939"
              onPress={() => {
                onClose();
                popupStorage.set({lastDate: new Date().toISOString()});
              }}>
              24시간 동안 다시 열람하지 않습니다.
            </Button>
            <Button size="sm" borderRadius={0} bg="#393939" onPress={onClose}>
              닫기
            </Button>
          </HStack>
        </VStack>
      </Modal.Content>
    </Modal>
  );
}

import {Modal, VStack, HStack, Button, Image, Pressable} from 'native-base';
import React from 'react';
import popupStorage from '@src/Utils/popupStorage';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useWindowDimensions} from 'react-native';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupModal({isOpen, onClose}: PopupModalProps) {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const width = useWindowDimensions().width;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" p={2}>
      <Modal.Content>
        <VStack>
          <Pressable
            width={width}
            onPress={() => {
              onClose();
              navigation.navigate('EventBorad', {Uid: 94}); //임시 맵핑 kt 공식몰
            }}>
            <AutoHeightImage
              width={width}
              source={{
                uri: 'https://ai.esmplus.com/ollehfine/app/pop-up/popup.jpg',
              }}
            />
          </Pressable>
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

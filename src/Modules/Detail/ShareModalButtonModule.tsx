import {Center, Pressable} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FontHeading} from '@src/Atomic/FontHeading';
import React from 'react';

interface ShareModalButtonProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ShareModalButtonModule({
  setShowModal,
}: ShareModalButtonProps) {
  return (
    <Pressable onPress={() => setShowModal(true)}>
      <Center m={3}>
        <FontAwesome name="share-square-o" size={50} color="black" />
        <FontHeading size="xs">공유하기</FontHeading>
      </Center>
    </Pressable>
  );
}

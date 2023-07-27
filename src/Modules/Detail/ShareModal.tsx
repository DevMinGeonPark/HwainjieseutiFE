import {
  Linking,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {
  Image,
  Modal,
  HStack,
  Box,
  Center,
  VStack,
  Input,
  useClipboard,
  Button,
} from 'native-base';
import {Images} from '@assets/imgs/Images';
import ShareIconButton from '@src/Atomic/Detail/ShareIconButton';

interface ShareModalProps {
  productId: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ShareModal({
  productId,
  showModal,
  setShowModal,
}: ShareModalProps) {
  const width = useWindowDimensions().width;
  const [copyText, setCopyText] = React.useState(
    `https://www.kt-online.shop/shop/item.php?it_id=${productId}`,
  );
  const [pasteText, setPasteText] = React.useState('');
  const {value, onCopy} = useClipboard();
  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      size="full"
      p={2}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>공유하기</Modal.Header>
        <Modal.Body>
          <Center my={2}>
            <HStack space={3} m={3}>
              <ShareIconButton image={Images.Share.Kakao} label="카카오톡" />
              <ShareIconButton
                image={Images.Share.KakaoStory}
                label="카카오스토리"
                onPress={() => {
                  Linking.openURL(
                    `https://story.kakao.com/s/share?url=${encodeURIComponent(
                      copyText,
                    )}`,
                  );
                }}
              />
              <ShareIconButton
                image={Images.Share.Line}
                label="라인"
                onPress={() => {
                  Linking.openURL(
                    `http://line.me/R/msg/text/?${encodeURIComponent(
                      copyText,
                    )}`,
                  );
                }}
              />
            </HStack>
            <HStack space={3} m={3}>
              <ShareIconButton
                image={Images.Share.Facebook}
                label="페이스북"
                onPress={() => {
                  Linking.openURL(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      copyText,
                    )}&t=${encodeURIComponent('KT화인지에스티')}`,
                  );
                }}
              />
              <ShareIconButton
                image={Images.Share.Twitter}
                label="트위터"
                onPress={() => {
                  Linking.openURL(
                    `https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20${encodeURIComponent(
                      copyText,
                    )}%20-%20${encodeURIComponent('KT화인지에스티')}`,
                  );
                }}
              />
              <ShareIconButton
                image={Images.Share.Band}
                label="밴드"
                onPress={() => {
                  Linking.openURL(
                    `http://band.us/plugin/share?body=${encodeURIComponent(
                      'KT화인지에스티',
                    )}${encodeURIComponent('\r\n')}${encodeURIComponent(
                      copyText,
                    )}&route=${encodeURIComponent(copyText)}`,
                  );
                }}
              />
            </HStack>
          </Center>
          <Center>
            <HStack>
              <Input
                width={width - 70}
                rounded="none"
                fontSize={19}
                onChangeText={v => setCopyText(v)}
                value={copyText}
                InputRightElement={
                  <Button
                    variant={'ghost'}
                    rounded="none"
                    borderLeftColor="muted.300"
                    borderLeftWidth={1}
                    _text={{color: 'black', fontSize: 19}}
                    onPress={() => onCopy(copyText)}>
                    복사
                  </Button>
                }
              />
            </HStack>
          </Center>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

const styles = StyleSheet.create({});

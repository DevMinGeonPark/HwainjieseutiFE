import {View, Text} from 'react-native';
import React from 'react';
import {FormControl, Input, Modal, VStack, Button} from 'native-base';
import {FontText} from '@src/Atomic/FontText';
import {useToast} from 'native-base';

interface CertificationNumberProps {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  confirmCode: () => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPhoneCerti: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CertificationNumber({
  code,
  setCode,
  confirmCode,
  showModal,
  setShowModal,
  setPhoneCerti,
}: CertificationNumberProps) {
  const toast = useToast();
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>휴대전화 인증</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl isRequired>
              <VStack>
                <FormControl.Label
                  _text={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
                  인증번호
                </FormControl.Label>
                <Input
                  autoCapitalize="none"
                  value={code}
                  onChangeText={(text: string) => setCode(text)}
                  keyboardType="phone-pad"
                />
                <FontText mt={2} fontSize={13}>
                  휴대전화로 전송된 인증번호를 입력해주세요. 해당 모달을 나가게
                  되면 다시 인증하셔야됩니다.
                </FontText>
              </VStack>
            </FormControl>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              size="sm"
              _text={{color: 'black'}}
              onPress={() => {
                setShowModal(false);
              }}>
              Cancel
            </Button>
            <Button
              size="sm"
              bg="black"
              onPress={() => {
                confirmCode();
                setShowModal(false);
                setPhoneCerti(true);
                toast.show({title: '인증이 완료되었습니다.'});
              }}>
              인증완료
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
